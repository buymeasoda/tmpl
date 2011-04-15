/*global tmpl, module, test, ok, equals */

module("tmpl tests");

test("tmpl exists", function () {
	ok(tmpl);
});

test("tmpl replaces simple content", function () {
    var template = "<p>Hello {{name}}</p>",
        result = "<p>Hello world</p>",
        content = {name: "world"};
    equals(tmpl(template, content), result);
});
});