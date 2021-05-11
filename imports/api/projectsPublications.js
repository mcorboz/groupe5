import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// export the database for importers
export const Projects = new Mongo.Collection("projects");

// define the schema of the Projects collection
Projects.schema = new SimpleSchema({
    name: { type: String },
    dateStart: { type: Date },
    dateEnd: { type: Date },
});

// Autoriser l'accès aux données par certains templates
if(Meteor.isServer) {
    Meteor.publish('projects.byId', function(projectId) {
        // check type of id
        new SimpleSchema({
            id: { type: String },
        }).validate({ projectId });

        return Projects.findOne({
            _id: projectId //FIXME
        });
    });
}

// Ecriture des méthodes
Meteor.methods({
    // Méthode pour ajouter un nouveau projet à la base de données
    'ajoutProjet'(objet) {
        let ajout = Projects.insert({
            objet
        });
        console.log("Nouveau projet enregistré");
        console.log(objet);
        return ajout;
    }
});