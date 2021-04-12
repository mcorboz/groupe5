import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Template } from 'meteor/templating';
// need to import the templates that we route to.
// Not doing so will cause a (silent! amazing job 
// devs) error
import '/imports/ui/templates/Home_page.html';
import '/imports/ui/templates/Profile_page.html';

Template.registerHelper('pathFor', function(route) {
    // TODO: add support for params and queryParams
    return FlowRouter.path(route);
});

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