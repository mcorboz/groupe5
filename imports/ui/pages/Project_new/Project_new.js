import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

// Importer la base de donnees
import { Elements } from "/imports/api/Project_infoDB.js";

// Importer les templates associés
import './Project_new.html';

// Fonction pour créer le projet (rassemble toutes les informations pour envoyer dans la DB)
Template.Project_new.events({
    'submit.project_new'(event) {
        event.preventDefault();
        // Récupérer le contenu des éléments HTML
        let dateStart = document.getElementById("date_start").value;
        let dateEnd = document.getElementById("date_end").value;
        let projectName = document.getElementById("project_name").value;

        // récupérer les inputs technical sélectionnés
        let checkedTechnicalTags = document.querySelectorAll('input[name="technical"]:checked');
        // Récupérer leur valeur et les mettre dans un array
        let technicalTags = [];
        checkedTechnicalTags.forEach(element => {
            technicalTags.push(element.value);
        })

        // récupérer les inputs technical sélectionnés
        let checkedGenreTags = document.querySelectorAll('input[name="genre"]:checked');
        // Récupérer leur valeur et les mettre dans un array
        let genreTags = [];
        checkedGenreTags.forEach(element => {
            genreTags.push(element.value);
        })

        // Still have to add the tags choice, which will be an array
        
        // Créer un objet avec les informations du projet
        let nouveauProjet = {
            dateStart,
            dateEnd,
            projectName,
            technicalTags,
            genreTags,
        };

        // Appeler la méthode 'ajoutProjet' (dans Project_infoDB.js)
        Meteor.call('ajoutProjet', nouveauProjet);
    }
});