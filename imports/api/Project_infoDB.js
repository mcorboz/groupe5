import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


// Exporter une constante pour la base de données
export const Elements = new Mongo.Collection("elements");

// Autoriser l'accès aux données par certains templates
if(Meteor.isServer) {
    Meteor.publish('elements', function publierProjet() {
        return Elements.find({});
    });
}

// Ecriture des méthodes
Meteor.methods({
    // Méthode pour ajouter un nouveau projet à la base de données
    'ajoutProjet'(objet){
        let ajout = Elements.insert({
            objet
        });
        console.log("Nouveau projet enregistré");
        console.log(objet);
        return ajout;
    }
})