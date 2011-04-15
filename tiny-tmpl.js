
function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, ref) {
        var value;
        if (ref.indexOf(".") >= 0 && ref !== ".") {
            value = data;
            ref = ref.split(".");
            for (var i = 0, l = ref.length; i < l; i++) {
                value = value[ref[i]];
            }            
        } else {
            value = data[ref];
        }
        return value || tag;
    });
}