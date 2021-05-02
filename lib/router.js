// see https://guide.meteor.com/routing.html

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Template } from 'meteor/templating';
// need to import the templates that we route to.
// Not doing so will cause a (silent! amazing job 
// devs) error
import '/imports/ui/Home_page/Home_page.html';
import '/imports/ui/Profile_page/Profile_page.html';
import '/imports/ui/project/new_project.html';

// register a global helper to create links between
// pages easily
Template.registerHelper('pathFor', function(route) {
    // TODO: add support for params and queryParams
    return FlowRouter.path(route);
});

//=============
//ACTUAL ROUTES
//=============

FlowRouter.route('/', {
    name: 'Home',
    action: function() {
        BlazeLayout.render('App', { main: 'Home_page' });
    },
});

FlowRouter.route('/profile', {
    name: 'Profile.show',
    action: function() {
        BlazeLayout.render('App', { main: 'Profile_page' });
    },
});

FlowRouter.route('/new_project', {
    name: 'new_project',
    action: function() {
        BlazeLayout.render('App', { main: 'newproject' });
    },
});