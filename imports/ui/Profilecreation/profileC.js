import '../templates/profilecreation';


Template.profilecreation.helpers({

    username() {
        return Meteor.user().username;
    },
    user_email(){
        return Meteor.user().email;        
    },
    user_pronoms(){
        return Meteor.user().pronoms;
    }
})
