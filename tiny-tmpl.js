
function tmpl(template, data) {
    return template.replace(/{{([^}]+)}}/g, function (str, val) {
        return data[val] || str;
    });
};