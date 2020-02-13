# jstransformer-asciidoctor [![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

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
