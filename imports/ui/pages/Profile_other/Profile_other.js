import { Meteor } from 'meteor/meteor';
import './Profile_other.html';

//if username -> real, alors display username, sinon 404

Template.Profile_other.helpers({
    username: function(){
        if (Meteor.users.findOne({
            username: FlowRouter.getParam("username"),
        })) {
            return FlowRouter.getParam("username");
        } else {
            return "notfound";
        }
    }
});