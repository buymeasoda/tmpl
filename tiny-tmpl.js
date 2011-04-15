
function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, ref) {
        var value = data;
        ref = ref.split(".");
        for (var i = 0, l = ref.length; i < l; i++) {
            value = value[ref[i]];
        }
        return value || tag;
    });
}