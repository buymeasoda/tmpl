
function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, key) {
        var value;
        if (key.match(/\./) && key !== ".") {
            value = data;
            key = key.split(".");
            for (var i = 0, l = key.length; i < l; i++) {
                value = value[key[i]];
            }            
        } else {
            value = data[key];
        }
        return value || tag;
    });
}