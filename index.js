"use strict";

const Asciidoctor = require("asciidoctor");
const asciidoctor = Asciidoctor();

exports.name = "asciidoctor";
exports.outputFormat = "html";
exports.inputFormats = ["asciidoc", "adoc", "asc"];
exports.render = function (str, options) {
  return asciidoctor.convert(str, options);
};
