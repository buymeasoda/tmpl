# tmpl

Simple JavaScript utility function for generating HTML content output from basic string templates and data object input.

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