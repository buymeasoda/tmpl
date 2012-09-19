
// Micro tmpl

/*
Example:

var template = "<p>Hello {{location}}!</p>",
    data = {location: "World"},
    content = tmpl(template, data);
    
Result:

content == "<p>Hello World!</p>"
*/

function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, key) {
        return typeof data[key] !== 'undefined' ? data[key] : tag;
    });
}