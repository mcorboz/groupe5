import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Project_new.html';

Template.Project_new.events({
    'submit .project_new'(event) {
        // prevent default HTTP form submission
        event.preventDefault();

        // Récupérer le contenu des éléments HTML
        let name = document.getElementById("project_name").value;
        let dateStart = document.getElementById("date_start").value;
        let dateEnd = document.getElementById("date_end").value;
        
        // Récupérer username de la personne qui crée le projet
        let creator = String(Meteor.user()._id);

        let checkedTechnicalTags = document.querySelectorAll('input[name="technical"]:checked');
        let technicalTags = [];
        checkedTechnicalTags.forEach(element => {
            technicalTags.push(element.value);
        })

        let checkedGenreTags = document.querySelectorAll('input[name="genre"]:checked');
        let genreTags = [];
        checkedGenreTags.forEach(element => {
            genreTags.push(element.value);
        })


        // create the project object that we will send
        let projet = {
            name,
            dateStart,
            dateEnd,
            technicalTags,
            genreTags,
            creator,
        };

        Meteor.call('projects.add', projet, (err, res) => {
            if (err) {
                // TODO: maybe do better in terms of warning, this just displays
                // HTTP error code 500 (internal server error) for all errors
                // including schema validation
                alert(err);
            } else {
                console.log(`Nouveau projet enregistré! ID: ${ res }`);
                console.log(projet);

                // redirect the user to the new project's page
                const params = { _id: res };
                FlowRouter.go('Project.show', params);
            }
        });
    }
});
