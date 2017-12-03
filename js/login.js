'use strict';
var LoginController = (function(params) {

    console.log('Login Called', params);
    $('#loginForm').html(Handlebars.templates.loginform);

    function login() {
        console.log('Login :::: ');
    }

    function validation() {
        console.log('Validation :::: ');
    }

    return {
        login: login,
        validation: validation
    }

});