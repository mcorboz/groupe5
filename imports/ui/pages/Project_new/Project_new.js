import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

// Importer la base de donnees
import { Elements } from "/imports/api/Project_infoDB.js";

// Importer les templates associés
import './Project_new.html';

// Fonction pour créer le projet (rassemble toutes les informations pour envoyer dans la DB)
Template.Project_new.events({
    'click #creerProjet'(event) {
        event.preventDefault();
        // Récupérer le contenu des éléments HTML
        let dateStart = document.getElementById("date_start").value;
        let dateEnd = document.getElementById("date_end").value;
        let projectName = document.getElementById("project_name").value;
        // Still have to add the tags choice, which will be an array
        
        let nouveauProjet = {
            dateStart,
            dateEnd,
            projectName,
        };

        // Appeler la méthode 'ajoutProjet' (dans Project_infoDB.js)
        Meteor.call('ajoutProjet', nouveauProjet);
    }
});