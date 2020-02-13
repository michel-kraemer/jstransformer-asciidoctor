# jstransformer-asciidoctor [![Actions Status](https://github.com/michel-kraemer/jstransformer-asciidoctor/workflows/CI/badge.svg)](https://github.com/michel-kraemer/jstransformer-asciidoctor/actions) [![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/michel-kraemer/jstransformer-asciidoctor.svg)](https://greenkeeper.io/)

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
