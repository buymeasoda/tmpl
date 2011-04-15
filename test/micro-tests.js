/*global tmpl, module, test, ok, equals */

module("micro tmpl tests");

test("micro tmpl exists", function () {
	ok(tmpl);
});

test("micro tmpl replaces simple content", function () {
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