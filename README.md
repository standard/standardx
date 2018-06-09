# standardx

JavaScript Standard Style with custom tweaks

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/standardx.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/standardx
[travis-image]: https://img.shields.io/travis/standard/standardx.svg?style=flat-square
[travis-url]: https://travis-ci.org/standard/standardx
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard


## Overview

This package allows users to follow JavaScript Standard Style, but deviate if needed. This can be done by adding an `.eslintrc` file to their project directory or by adding an `"eslintConfig"` attribute to your `packages.json`. That eslint config will be layed on top of the `standard` ruleset.

If there is a `standard` attribute in your `package.json` for defining globals or ignoring files, rename it to `standardx`:

```js
"standardx": {
    "global": [
      "chrome",
      "muon",
      "postMessage"
    ]
}
```

All other `standard` features remain intact (including `--fix`!)

## Install

```
npm install standardx --global
```

## Usage
Use `standardx` on the command line the same way you use `standard`:

```
Usage:
    standardx <flags> [FILES...]

    If FILES is omitted, then all JavaScript source files (*.js, *.jsx) in the current
    working directory are checked, recursively.

    Certain paths (node_modules/, coverage/, vendor/, *.min.js, bundle.js, and
    files/folders that begin with '.' like .git/) are automatically ignored.

    Paths in a project's root .gitignore file are also automatically ignored.

Flags:
        --fix       Automatically fix problems
    -v, --verbose   Show rule names for errors (to ignore specific rules)
        --version   Show current version
    -h, --help      Show usage information

Flags (advanced):
        --stdin     Read file text from stdin
        --global    Declare global variable
        --plugin    Use custom eslint plugin
        --env       Use custom eslint environment
        --parser    Use custom js parser (e.g. babel-eslint)
```

## Configuring

Running `standardx` with no additional configuration is the same as running `standard` itself. (Except rename the `"standard"` property in `package.json` to `"standardx"` if you have one.)

If there are rules you would like turned off, modify the ruleset using eslint config. Check out [Configuring eslint](http://eslint.org/docs/user-guide/configuring) for more information.

### Example: Allow snake_case by turning off the camelCase rule

Via: `.eslintrc`:
```json
{
  "rules": {
    "camelcase": 0
  }
}
```

or via package.json:
```json
{
  "name": "coolproject",
  "description": "My Cool Project",
  "version": "1.0.0",
  "author": "Fantastic Developer",
  "eslintConfig": {
    "rules": {
      "camelcase": 0
    }
  }
}
```

Now, running `standardx` (with no additional arguments) will allow snake_case without error!

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[MIT](LICENSE.md)
