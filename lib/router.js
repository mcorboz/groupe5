// see https://guide.meteor.com/routing.html

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Template } from 'meteor/templating';
// need to import the templates that we route to.
// Not doing so will cause a (silent!) error
// FIXME should we import the javascript files? it works like this
// so far but extra functionality may be broken later
import '/imports/ui/pages/Home_page/Home_page.html';
import '/imports/ui/pages/Profile_page/Profile_page.html';
import '/imports/ui/pages/Project_new/Project_new.html';
import '/imports/ui/pages/Project_show/Project_show.html'

// register a global helper to create links between
// pages easily
// (http://blazejs.org/api/templates.html#Template-registerHelper)
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

FlowRouter.route('/project/new', {
    name: 'Project.new',
    action: function() {
        BlazeLayout.render('App', { main: 'Project_new' });
    },
});

FlowRouter.route('/project/:_id', {
    name: 'Project.show',
    action: function() {
        BlazeLayout.render('App', { main: 'Project_show' });
    },
});
