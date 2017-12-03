'use strict';

$bind.routes = [
    { url: '/', controller: 'LoginController', view: 'content', templateName: 'login' },
    { url: '/signup', controller: 'SignupController', view: 'content', templateName: 'signup' },
    { url: '/home', controller: 'HomeController', view: 'content', templateName: 'home' },
    { url: '/product', controller: 'ProductController', view: 'content', templateName: 'product' },
    { url: '/user', controller: 'UserController', view: 'content', templateName: 'user' }
];
$bind.routecheck();