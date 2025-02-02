# SvelteKit MS Office Add-ins template

The [Office Add-ins](https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins) platform allows developers to build customs tools that have the ability to interact with Office apps through Microsoft's javascript APIs. 

By default, the [Yeoman Generator](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/yeoman-generator-overview) CLI tool for creating add-in projects can stand up vanilla js/ts or React web apps with FluentUI. Moving away from these defaults can be a painful process.

This project provides a template for building a SvelteKit taskpane app for Office, Word or PowerPoint with TailwindCSS, some example Excel custom functions, and a WASM (Rust) module.

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



## Rust?

If you wish to implement any functions in Rust/WASM, you will need to [install Rust](https://www.rust-lang.org/tools/install) and then build the package:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install wasm-pack
wasm-pack build --target web
```