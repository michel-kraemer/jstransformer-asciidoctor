# jstransformer-asciidoctor [![Actions Status](https://github.com/michel-kraemer/jstransformer-asciidoctor/workflows/CI/badge.svg)](https://github.com/michel-kraemer/jstransformer-asciidoctor/actions) [![Known Vulnerabilities](https://snyk.io/test/github/michel-kraemer/jstransformer-asciidoctor/badge.svg)](https://snyk.io/test/github/michel-kraemer/jstransformer-asciidoctor) [![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  [![NPM version](https://img.shields.io/npm/v/jstransformer-asciidoctor.svg)](https://www.npmjs.org/package/jstransformer-asciidoctor)

This library adds AsciiDoc support via [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js) to [JSTransformers](https://github.com/jstransformers).

## Installation

    npm install jstransformer-asciidoctor

## Usage

```js
const asciidoctor = require("jstransformer")(require("jstransformer-asciidoctor"));

console.log(asciidoctor.render("_Hello world!_").body);
// => <div class="paragraph">
//    <p><em>Hello world!</em></p>
//    </div>
```

## License

jstransformer-asciidoctor is released under the **MIT license**. See the
[LICENSE](LICENSE) file for more information.
