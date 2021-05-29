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
});

