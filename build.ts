import esbuild, { BuildOptions } from "esbuild";

const isWatch = process.argv.includes("--watch") || process.argv.includes("-w");

const buildOptions: BuildOptions = {
  entryPoints: ["./src/main.ts"],
  bundle: true,
  outfile: "./public/build/bundle.js",
  platform: "browser",
  target: "esnext",
  sourcemap: true,
};

if (isWatch) {
  esbuild
    .context(buildOptions)
    .then((ctx) => {
      ctx.watch().then(() => {
        console.log("Watching for changes...");
      });
    })
    .catch(() => process.exit(1));
} else {
  esbuild.build(buildOptions).catch(() => process.exit(1));
}
