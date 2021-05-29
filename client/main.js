// import the routing code or else routing (silently) isn't
// done
import '/lib/router.js';
// leaving out the extension here is apparently necessary
// or at least i haven't figured out another way, seems
// clean enough
import '/imports/ui/body.js';

Template.registerHelper('currentUserName', function() {
    return Meteor.user().username;
});

// FIXME this is very bad. I hate this. FUCk meteor. aahhh
Template.registerHelper('currentUserNameWrapped', function() {
    return {
        username: Meteor.user().username,
    };
});

