
function getObjectValue(ref, obj) {
    ref = ref.split(".");
    for (var i = 0, l = ref.length; obj && i < l; i++) {
        obj = obj[ref[i]] || undefined;
    }
    return obj;
}

function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, ref) {
        return getObjectValue(ref, data) || tag;
    });
}