import './Profile_show.html';
import '/imports/ui/components/NotFound/NotFound.html';

// TODO IMPORTANT: see
// https://guide.meteor.com/accounts.html#case-sensitivity

Template.Profile_show.onCreated(function() {
    Meteor.subscribe('users.public');
});

const getUser = () => {
    const username = FlowRouter.getParam('username');
    return Meteor.users.findOne({ username });
}

Template.Profile_show.helpers({ 
    userExists: function() {
        return !!getUser();
    },

    isOwnProfile: function() {
        return Meteor.user() && Meteor.user().username === FlowRouter.getParam('username');
    },

    username: function() {
        return getUser().username;
    },

    email: function() {
        return getUser().emails[0].address;
    },

    prog_interests: function() {
        return getUser().profile.interests[0][1];
    },

    visuals_interests: function() {
        return getUser().profile.interests[1][1];
    },
    
    sounddesign_interests: function() {
        return getUser().profile.interests[2][1];
    },

    gamedesign_interests: function() {
        return getUser().profile.interests[3][1];
    },

    narrative_interests: function() {
        return getUser().profile.interests[4][1];
    },

    prog_skills: function() {
        return getUser().profile.skills[0][1];
    },

    visuals_skills: function() {
        return getUser().profile.skills[1][1];
    },
    
    sounddesign_skills: function() {
        return getUser().profile.skills[2][1];
    },

    gamedesign_skills: function() {
        return getUser().profile.skills[3][1];
    },

    narrative_skills: function() {
        return getUser().profile.skills[4][1];
    },
});

