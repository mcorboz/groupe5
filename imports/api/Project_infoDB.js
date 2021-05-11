import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

// Exporter une constante pour la base de données
export const Projects = new Mongo.Collection("projects");

// Autoriser l'accès aux données par certains templates
if(Meteor.isServer) {
    Meteor.publish('projects.byId', function(_id) {
        // check type of id
        new SimpleSchema({
            _id: { type: String },
        }).validate({ _id });

        return Projects.findOne({
            _id, //FIXME
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