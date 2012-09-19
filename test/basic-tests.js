/*global tmpl, module, test, ok, equals */

module("tmpl - basic");

test("tmpl exists", function () {
	ok(tmpl);
});

test("tmpl replaces simple content", function () {
    var template = "<p>Hello {{name}}</p>",
        result = "<p>Hello world</p>",
        content = {name: "world"};
    equals(tmpl(template, content), result);
});

test("tags that don't exist in the content object aren't replaced", function () {
    var template = "<p>Hello {{name}}</p>",
        result = "<p>Hello {{name}}</p>",
        content = {};
    equals(tmpl(template, content), result);
});

test("falsy values are rendered correctly to the template", function () {
    var template = "Empty string: '{{empty}}', Zero: {{zero}}, Whitespace: '{{whitespace}}'",
        result = "Empty string: '', Zero: 0, Whitespace: '\t'",
        content = {
            empty: '',
            zero: 0,
            whitespace: '\t'
        };
    equals(tmpl(template, content), result);
});