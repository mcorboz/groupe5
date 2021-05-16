import './Profile_creation.html';

if (Meteor.isClient) {
    Accounts.ui.config({
        // register with a username rather than email address
        passwordSignupFields: "USERNAME_ONLY"
    });
}

/*
Template.Profile_creation.helpers({
    username() {
        return Meteor.user().username;
    },
    user_email() {
        return Meteor.user().email;        
    },
    user_pronoms() {
        return Meteor.user().pronoms;
    },
}); */
