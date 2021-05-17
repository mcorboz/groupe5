import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Profile_creation.html';

Template.Profile_creation.events({
    'submit .account_new'(event) {
        // prevent default HTTP form submission
        event.preventDefault();

        // Récupérer contenu des éléments HTML
        let pseudo = document.getElementById("pseudo").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let password2 = document.getElementById("password2").value;
      

        // create the account object that we will send
        let account = {
            pseudo,
            email,
            password,
        };

        Meteor.call('accounts.add', account, (err, res) => {
            if (err) {
                alert(err);
            } else {
                console.log(`Nouveau compte enregistré! ID: ${ res }`);
                console.log(account);

                // redirect the user to the profile page
                const params = { _id: res };
                FlowRouter.go('Profile.show', params);
            }
        });
            }
      });
