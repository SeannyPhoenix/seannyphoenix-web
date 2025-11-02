package main

import (
	"fmt"
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
		fmt.Println(result.Errors)
		os.Exit(1)
	}
}
