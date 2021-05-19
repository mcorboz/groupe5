import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Profile_creation.html';


Template.Profile_creation.onCreated(function () {
	this.new = new ReactiveVar(false);
});

Template.Profile_creation.helpers({
	new: () => Template.instance().new.get(),
});

Template.Profile_creation.events({
    // Ouvrir les inputs pour créer un compte
    'click #new_account'(event, template) {
        event.preventDefault();
        template.new.get()
        ? template.new.set(false)
        : template.new.set(true);
    },
    // connexion au compte lié aux infos notées
    'click #connection'(event) {
		event.preventDefault();
        // récup username et mdp
		let username = document.getElementById('pseudo').value;
		let password = document.getElementById('password').value;
		Meteor.loginWithPassword(username, password, (error) => {
			if (error) {
				alert(error.message);
			} else {
				setTimeout(() => FlowRouter.go('Home'), 200);
			}
		});
	},
    // création d'un nouvaeu compte
    'click #create_account'(event) {
		event.preventDefault();
        // Récup toutes les infos
        let username = document.getElementById("pseudo").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let password2 = document.getElementById("password2").value;
        // AJOUTER COMPETENCES ET INTERETS
		if (password.length > 5) {
			if (password == password2) {
				if (username != '' && password != '' && email != '') {
                    // vérifier si l'adresse email est valide
                    function validEmail(value) {
                        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        if (filter.test(value)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    if (validEmail(email) == false) {
                        alert('Veuillez entrer une adresse mail valide')
                    } else {
                        Accounts.createUser(
                            {
                                username: username,
                                password: password,
                                email: email
                                // AJOUTER LES COMPETENCES ET INTERETS
                            },
                            (error) => {
                                if (error) {
                                    alert(error.message);
                                } else {
                                    setTimeout(() => FlowRouter.go('Profile.show'), 200);
                                }
                            },
                        );
                    }
				} else {
					if (username == ''){
                        alert('Veuillez choisir un pseudo');
                    }
                    if (password == ''){
                        alert('Veuillez inscrire un mot de passe');
                    }
                    if (email == ''){
                        alert('Veuillez ajouter une adresse email');
                    }
				}
			} else {
				alert('Vos deux mots de passe ne sont pas identiques');
			}
		} else {
			alert('Votre mot de passe est trop court (min. 6 caractères)');
		}
	},
});

    /* 'submit .account_new'(event) {
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
                //const params = { _id: res };
                FlowRouter.go('Profile.show');
            }
        });
    } */
