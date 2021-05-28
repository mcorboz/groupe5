import './Profile_page.html';

Template.Profile_page.onRendered(function () {
    // If user not connected, redirect to login page
    if (!Meteor.user()) {
        alert("Vous devez être connecté·e pour voir cette page");
        FlowRouter.go("Login");
    }
});
			
Template.Profile_page.helpers({
    username: function(){
        if(Meteor.user()){
            return Meteor.user().username;
        };
    },
    email: function(){
        if(Meteor.user()) {
            return Meteor.user().emails[0].address;
        };
    },
    prog_interests: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.interests[0][1];
        };
    },
    visuals_interests: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.interests[1][1];
        };
    },
    sounddesign_interests: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.interests[2][1];
        };
    },
    gamedesign_interests: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.interests[3][1];
        };
    },
    narrative_interests: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.interests[4][1];
        };
    },
    prog_skills: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.skills[0][1];
        };
    },
    visuals_skills: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.skills[1][1];
        };
    },
    sounddesign_skills: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.skills[2][1];
        };
    },
    gamedesign_skills: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.skills[3][1];
        };
    },
    narrative_skills: function(){
        if(Meteor.user()) {
            return Meteor.user().profile.skills[4][1];
        };
    },
    // Check which projects have been created by the user
    /* project: Projects.find().forEach(project => {
        if (Meteor.user()._id == project.creator){

        }
    }), */
})

