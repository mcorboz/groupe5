import './Profile_page.html';

Template.Profile_page.helpers({
    username: function(){
        if(Meteor.user()){
            
            return Meteor.user().username;
        };
    },
    email: function(){
        if(Meteor.user()) {
            return Meteor.user().emails[0[1]];
        };
    },
    
})