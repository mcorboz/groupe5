import { Meteor } from 'meteor/meteor';
import './Profile_other.html';



const findUser = () => {
    let user = Meteor.users.findOne({
        username: FlowRouter.getParam("username")        
    });
    return user;
}

Template.Profile_other.helpers({ 
    username: function(){
        if (findUser()) {
            return FlowRouter.getParam("username");
        } else {
            return "notfound";
        }
    },

    email: function() {
        if (findUser()) {
            let user = findUser(); 
            return user.emails[0].address; 
        } else {
            return "notfound";
        }
    } 
});
// Remplir le reste des skills quand la pagination du profil sera mieux codée - D.R
