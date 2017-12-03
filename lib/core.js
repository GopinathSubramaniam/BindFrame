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
            var route = $bind.routes.filter(function(item) {
                return item.url == hash;
            });
            if (route && route.length > 0) {
                var ctrlName = route[0].controller; //Getting controller name
                var templateName = route[0].templateName; // Getting template name
                var viewName = route[0].view; //Getting view name
                if (templateName) $('#' + viewName).html(Handlebars.templates[templateName]()); //Displaying view
                if (ctrlName) $bind[ctrlName] = eval(ctrlName)(param); //Binding and executing controller
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

    return {
        routecheck: routecheck,
        serializeObj: serializeObj,
		go: go
    }
}());