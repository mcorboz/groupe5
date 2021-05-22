import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Register.html';

Template.Register.events({
    // création d'un nouveau compte
    'click #create_account'(event) {
		event.preventDefault();
        // Récup les éléments HTML
        let username = document.getElementById("pseudo").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let password2 = document.getElementById("password2").value;

        // Interets
        // Récupérer tous les intérêts
        let interets = document.getElementsByName("interets");
        // Créer un array vide pour y stocker les intérêts sélectionnés
        let interets_sel = [];
        // Pour chaque intérêt
        interets.forEach(element => {
            // Si sa valeur est différente de -
            if (element.value != '-') {
                // Récupérer la valeur sélectionnée
                let valeur = element.value;
                // Récupérer le nom de l'intérêt
                let interet_nom = element.id;
                // Créer un array avec le nom et la valeur de l'intérêt
                let nouvel_interet = [];
                nouvel_interet.push(interet_nom);
                nouvel_interet.push(valeur);
                // Et les ajouter à l'objet des intérêts sélectionnés
                interets_sel.push(nouvel_interet);
            }    
        });

        // Competences
        // Récupérer toutes les competences
        let competences = document.getElementsByName("competences");
        // Créer un array vide pour y stocker les compétences sélectionnées
        let competences_sel = [];
        // Pour chaque compétence
        competences.forEach(element => {
            // Si sa valeur est différente de -
            if (element.value != '-') {
                // Récupérer la valeur sélectionnée
                let valeur = element.value;
                // Récupérer le nom de la compétence
                let competence_nom = element.id;
                // Créer un array avec le nom et la valeur de la compétence
                let nouvelle_competence = [];
                nouvelle_competence.push(competence_nom);
                nouvelle_competence.push(valeur);
                // Et les ajouter à l'objet des compétences sélectionnées
                competences_sel.push(nouvelle_competence);
            }    
        });
        

        // Vérifications pour que toutes les informations nécessaires soient entrées par le user
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
                        // Créer le compte
                        Accounts.createUser(
                            {
                                username: username,
                                password: password,
                                email: email,
                                createdAt: new Date,
                                profile: {
                                    intérêts: interets_sel,
                                    compétences: competences_sel,
                                },
                            },
                            (error) => {
                                if (error) {
                                    alert(error.message);
                                } else {
                                    FlowRouter.go('Profile.show');
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

