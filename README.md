# VS Code Extension Scaffold

An opinionated scaffold template to build VS Code extensions.

## Main Features

List your extension's main features here so your potential users can quickly decide if they want to install it.

- Sample command that displays a notification popup.

## Contributing

- Execute `yarn install` in terminal to install dependencies
- Execute the `Run Extension` target in the Debug View.
  This will:
  - Start a task `npm: watch` to compile the code
  - Run the extension in a new VS Code window

### Typechecking and Building

To typecheck the extension using `tsc`, run

```sh
yarn compile
```

To build and package the extension we use the `esbuild` bundler.
To bundle the extension into `dist/main.js`, run

```sh
yarn build
```

### Unit Testing

Unit tests can be found under the `test` folder.
Our test suite uses `mocha` to run the tests.

```sh
yarn test
```

### VS Code Testing

**TODO!**

### VS Code API Overview

### `languages` module

The extension uses [`languages.registerCodeLensProvider`](https://code.visualstudio.com/api/references/vscode-api#languages.registerCodeLensProvider)
to register the `CodeLensProvider`.
