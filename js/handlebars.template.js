(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Home Page</h1>";
},"useData":true});
templates['login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Login Page</h1>\r\n<div id=\"loginForm\"></div>\r\n<button class=\"btn btn-primary\" onclick=\"$bind.self.login();\">Login</button>";
},"useData":true});
templates['product'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Product Page</h1>";
},"useData":true});
templates['signup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Signup Page</h1>";
},"useData":true});
templates['user'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>User Page</h1>";
},"useData":true});
})();