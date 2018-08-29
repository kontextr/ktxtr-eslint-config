## [kontextR](https://www.kontextr.com/en/) eslint config

_Created by **yours truly**_ :heart:

This repository holds [kontextR's](https://www.kontextr.com/en/) global eslint configuration files.
It is published under the [ISC license](https://opensource.org/licenses/ISC).

### How to use it
Install the configuration like any other using npm `npm install --save-dev @ktxtr/eslint-config`.
You can use it by adding `extends: [ "@ktxtr/eslint-config" ]` to your `.eslintrc` file.

### Additional configurations
The basic configuration contains linters for generic js code. There are a couple of other
specialized configurations you can use alongside the generic one using `extends: [
"@ktxtr/eslint-config/<name>" ]` and replacing `<name>` with one of:
- `jest`: for linting jest test files
- `inferno`: for linting inferno framework based files

> The main package contains, due to these additional configurations, additional peer dependencies. If
> you do not use these you can safely ignore the peer dependency warnings.
