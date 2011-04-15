/*global tmpl, module, test, ok, equals */

module("tmpl tests");

test("tmpl exists", function () {
	ok(tmpl);
});

test("tmpl replaces simple content", function () {
    equals(tmpl("<p>Hello {{name}}</p>", {name: "world"}), "<p>Hello world</p>");
});