'use strict';

$bind.routes = [{
        state: 'main',
        url: '/',
        controller: 'LoginController',
        view: '#content',
        templateName: 'login'
    },
    { state: 'signup', url: '/signup', controller: 'SignupController', view: '#content', templateName: 'signup' },
    { state: 'landingpage', url: '/landingpage', view: '#content', templateName: 'landingpage' },
    { state: 'landingpage.home', url: '/home', controller: 'HomeController', view: '#landingpageContent', templateName: 'home' },
    { state: 'landingpage.product', url: '/product', controller: 'ProductController', view: '#landingpageContent', templateName: 'product' },
    { state: 'landingpage.user', url: '/user', controller: 'UserController', view: '#landingpageContent', templateName: 'user' }
];
$bind.routecheck();