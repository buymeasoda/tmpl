
function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, key) {
        var value = data, 
            keys = key.split(".");
        for (var i = 0, l = keys.length; i < l; i++) {
            value = value[keys[i]];
        }            
        return value || tag;
    });
}