
// Tiny tmpl

/*
Example:

var template = "<p>{{greeting}}, {{agent.title}} {{agent.surname}}.</p>",
    data = {
        greeting: "Good evening",
        agent: {
            title: "Mister",
            surname: "Bond"
        }
    },
    content = tmpl(template, data);
    
Result:

content == "<p>Good evening, Mister Bond.</p>"
*/

var tmpl = (function () {
    var pattern = /\{\{([^}]+)\}\}/g;
    return function (template, data) {
        return template.replace(pattern, function (tag, key) {
            var value = data;
            key = key.split(".");
            for (var i = 0, l = key.length; value && i < l; i++) {
                value = value[key[i]];
            }
            return typeof value !== 'undefined' ? value : tag;
        });
    };
}());