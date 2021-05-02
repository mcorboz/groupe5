import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

// Importer la base de donnees
import { Elements } from "../../api/Project_infoDB.js";

// Importer les templates associés
import './new_project.html';
import './project_elements/Date_end';
import './project_elements/Date_start';
import './project_elements/project_name';
import './project_elements/tags_choice';
import './project_elements/tags_list';



// Fonction pour créer le projet (rassemble toutes les informations pour envoyer dans la DB)
Template.newproject.events({
    'click #creerProjet'(event) {
        event.preventDefault();
        console.log("aled");
        // Récupérer le contenu des éléments HTML
        let dateStart = document.getElementById("date_start").value;
        let dateEnd = document.getElementById("date_end").value;
        let projectName = document.getElementById("project_name").value;
        // Still have to add the tags choice, which will be an array
        
        let nouveauProjet = {
            datestart: dateStart,
            dateend: dateEnd,
            projectname: projectName,
        };
        // Appeler la méthode 'ajoutProjet' (dans Project_infoDB.js)
        Meteor.call('ajoutProjet', nouveauProjet);
    }
});