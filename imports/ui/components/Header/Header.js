import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './Header.html';

Template.Header.events({
    'click #logout'() {
        Meteor.logout((error) => {
            if (error) {
                alert(error.message);
            } else {
                FlowRouter.go('Home');
            }
        });
    },
    'click #login'() {
        FlowRouter.go('Login');
    },
});
