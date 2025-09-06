package main

import (
	"os"

	"github.com/evanw/esbuild/pkg/api"
)

func main() {
	opts := api.BuildOptions{
		EntryPoints: []string{"./src/main.ts"},
		Bundle:      true,
		Outfile:     "./public/build/bundle.js",
		Platform:    api.PlatformBrowser,
		Target:      api.ESNext,
		Sourcemap:   api.SourceMapLinked,
		Write:       true,
	}

	result := api.Build(opts)
	if len(result.Errors) > 0 {
		os.Exit(1)
	}
}
