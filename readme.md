# tmpl

Simple JavaScript utility function for generating HTML content output from basic string templates and data object input.

## Example

    var template = "<p>{{greeting}}, {{agent.title}} {{agent.surname}}.</p>",
        data = {
            greeting: "Good evening",
            agent: {
                title: "Mister", 
                surname: "Bond"
            }
        },
        content = tmpl(template, data);

## Result

    content == "<p>Good evening, Mister Bond.</p>"
    
## Versions

Two versions are available:

* Micro Tmpl is smaller but only accepts data objects with one level of depth
* Tiny Tmpl allows the use of more complex, nested data objects as input