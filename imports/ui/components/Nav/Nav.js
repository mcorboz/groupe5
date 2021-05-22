import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './Nav.html';

Template.Nav.events({
    'click #logout'() {
        Meteor.logout((error) => {
            if (error) {
                alert(error.message);
            } else {
                setTimeout(() => FlowRouter.go('Home'), 200);
            }
        });
    },
    'click #login'() {
        FlowRouter.go('Login');
    },
});
