'use strict';

var $bind = (function() {
    if ("onhashchange" in window) {
        console.log('Browser Support Anchor Change Event');
        window.onhashchange = function() {
            console.log('Hash Changed', window.location.hash);
            routecheck();
        }
    }

    function routecheck() {
        var hash = window.location.hash.replace(/#/g, '').trim(); //Getting current url hash string to match the url in routes
        var splitted = hash.split('?');
        var param = {};
        if (splitted.length > 0)
            hash = splitted[0] ? splitted[0] : '/';
        if (splitted.length > 1) {
            param = serializeObj(splitted[1]);
        }

        if ($bind.routes) { //"routes" is the global object that will contains list of routing details
            var routeObj = getRoute(hash, 'url');
            if (routeObj) {
                var states = routeObj.state.split('.');
                for (var i = 0; i < states.length - 1; i++) {
                    var route = getRoute(states[i], 'state');
                    displayView(route, param);
                }
                displayView(routeObj, param);
            } else {
                // go('#/');
            }
        }
    }

    function serializeObj(queryParam) {
        var obj = {};
        var params = queryParam.split('&');
        params.forEach(function(param, i) {
            var keyVal = param.split('=');
            var key = keyVal[0];
            var val = keyVal[1];
            obj[key] = val;
        });

        return obj;
    }

    function go(path) {
        window.location.href = '#' + path;
    }

    function getRoute(hash, type) {
        //Type can be url OR state
        var route = $bind.routes.filter(function(item) {
            return item[type] == hash;
        });
        return route && route.length > 0 ? route[0] : {};
    }

    function displayView(route, params) {
        var ctrlName = route.controller;
        var templateName = route.templateName;
        var viewName = route.view;
        if (typeof viewName == 'string') {
            if (templateName) $(viewName).html(Handlebars.templates[templateName]()); //Displaying view
        } else {
            if (templateName) $(viewName.content).html(Handlebars.templates[templateName]()); //Displaying view
            if (Handlebars.templates.header)
                $(viewName.header).html(Handlebars.templates.header()); //Displaying header
            if (Handlebars.templates.footer)
                $(viewName.footer).html(Handlebars.templates.footer()); //Displaying footer
        }
        if (ctrlName) $bind[ctrlName] = eval(ctrlName)(params); //Binding and executing controller
    }

    return {
        routecheck: routecheck,
        serializeObj: serializeObj,
        go: go
    }
}());