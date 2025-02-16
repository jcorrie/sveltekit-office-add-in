# SvelteKit MS Office Add-ins template

The [Office Add-ins](https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins) platform allows developers to build customs tools that have the ability to interact with Office apps through Microsoft's javascript APIs. 

By default, the [Yeoman Generator](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/yeoman-generator-overview) CLI tool for creating add-in projects can stand up vanilla js/ts or React web apps with FluentUI. Moving away from these defaults can be a painful process.

This project provides a template for building a SvelteKit taskpane app for Excel, Word or PowerPoint with TailwindCSS, some example Excel custom functions, and a WASM (Rust) module. Please note that a command button has beenn implemented in the Excel manifest, but not for Word or PowerPoint.

One area for continued development is the way that javascript files are served for custom functions and command buttons. Currently these are served through the static folder, which means typescript is not available and there is de-coupling from functions written for the taskpane.

## First time?

If you haven't built an Office Add-in before, try a [quick start](https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-jquery?tabs=devkit) from Microsoft first to get familiar with the environment. You will need a recent Node LTS version.

## Start with SvelteKit

Clone the repositary and install:

```shell
npm install
```

Unlike the Yeoman-based templates, we are not running a statically generated app. As such you will need to first start the Node server:

```shell
npm run dev
```

And then launch the add-in. This second command is using the relevant [manifest.xml](./office_manifests/) to launch the taskpane within the relevant Office app.

```shell
npm run office
```

There are three manifests available: PowerPoint, Excel and Word. Please point the [package.json](/package.json) `scripts` command at the relevant file.

## Docker

You can build and run a docker container as follows:

```sh
docker build -t sveltekit-app .
docker run -p 3000:3000 sveltekit-app
```


If you are using any rust/wasm components, make sure to build the package first. The binary and bindings will be exported statically (rather than being compiled as part of the docker imaged build). If you want to deploy an image to production that uses wasm it would of course be better to incorporate the build into the dockerfile. 

You may not be able to get the taskpane to launch from the local dockerised node server as it will be under http://127.0.0.1:3000 and there's an https issue of some description. If you run the container on the cloud it should work fine (tested with Azure container registry + web app).

## Rust?

If you wish to implement any functions in Rust/WASM, you will need to [install Rust](https://www.rust-lang.org/tools/install) and then build the package:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install wasm-pack
wasm-pack build --target web
```