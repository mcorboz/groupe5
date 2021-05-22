import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Register.html';

Template.Register.events({
    // création d'un nouveau compte
    'submit .register'(event) {
        // don't do default form HTTP request
        event.preventDefault();

        // get basic user input values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password_confirm = document.getElementById("password-confirm").value;

        // check user input validity
        const email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (password.length < 6) {
			alert('Votre mot de passe est trop court (min. 6 caractères)');
            return;
        } else if (password !== password_confirm) {
            alert('Les mots de passes entrés ne correspondent pas.');
            return;
        } else if (username.length < 5) {
            alert('Votre nom d\'utilisateur.ice est trop court (min. 5 caractères)');
        } else if (!email_filter.test(email)) {
            alert('Veuillez entrer une adresse mail valide');
            return;
        }
    
        // get interests user input values
        let interests_selection = []; // FIXME should probably be an object and not an array
        // section in which all interests sliders are
        const interests = document.getElementById("interests");
        // for each interest slider
        interests.querySelectorAll('input[type="range"]').forEach((element) => {
            let name = element.id;
            let value = element.value;
            // create a new array with the name and value of the interest
            // FIXME should be an object and not an array
            let interest_new = [];
            interest_new.push(name);
            interest_new.push(value);
            interests_selection.push(interest_new);
        });

        // get skills user input values 
        let skills_selection = []; // FIXME should probably be an object and not an array
        // section in which all skills sliders are
        const skills = document.getElementById("skills");
        // for each skill slider
        skills.querySelectorAll('input[type="range"]').forEach((element) => {
            let name = element.id;
            let value = element.value;
            // create a new array with the name and value of the skill
            // FIXME should be an object and not an array
            let skill_new = [];
            skill_new.push(name);
            skill_new.push(value);
            skills_selection.push(skill_new);
        });

        // add user to the accounts collection
        // FIXME probably incorrect? should be done on the server via meteor method call or smth?
        const user = {
            username,
            password,
            email,
            //createdAt: new Date, // FIXME is this necessary?
            profile: {
                interests: interests_selection,
                skills: skills_selection,
            },
        };
        Accounts.createUser(user, (error) => {
            if (error) {
                alert(error.message);
            } else {
                FlowRouter.go('Profile.show');
            }
        });
	},
});
