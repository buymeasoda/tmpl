
var tmpl = (function () {
    var pattern = /\{\{([^}]+)\}\}/g;
    return function (template, data) {
        return template.replace(pattern, function (tag, key) {
            var value = data;
            key = key.split(".");
            for (var i = 0, l = key.length; value && i < l; i++) {
                value = value[key[i]];
            }
            return value || tag;
        });
    };
}());