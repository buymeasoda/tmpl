
function tmpl(template, data) {
    return template.replace(/\{\{([^}]+)\}\}/g, function (tag, key) {
        return data[key] || tag;
    });
}