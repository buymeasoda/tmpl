/*global tmpl, module, test, ok, equals */

module("tiny tmpl tests");

test("tiny tmpl exists", function () {
	ok(tmpl);
});

test("tiny tmpl replaces simple content", function () {
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

test("tiny tmpl replaces nested object property values", function () {
    var template = "<p>Agent {{code}}: {{name.first}} {{name.last}}</p>",
        result = "<p>Agent 007: James Bond</p>",
        content = {
            code: "007",
            name: {
                first: "James",
                last: "Bond"
            }
        };
    equals(tmpl(template, content), result);
});

test("tiny tmpl returns tag name for non-matched nested object property", function () {
    var template = "<p>My {{title}} is {{name.last}}, {{name.first}} {{name.last}}</p>",
        result = "<p>My name is Bond, {{name.first}} Bond</p>",
        content = {
            title: "name",
            name: {
                last: "Bond"
            }
        };
    equals(tmpl(template, content), result);
});