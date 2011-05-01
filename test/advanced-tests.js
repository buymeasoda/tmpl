/*global tmpl, module, test, ok, equals */

module("tmpl - advanced");

test("tmpl replaces nested object property values", function () {
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

test("tmpl returns tag name for non-matched nested object property", function () {
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

test("{{.}} should not cause an error when looking up object reference", function () {
    var template = "{{.}}",
        result = "{{.}}",
        content = {};
    equals(tmpl(template, content), result);
});