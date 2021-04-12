import { Meteor } from "meteor";
import { Template } from "meteor/templating";

Template.titre.events({
    'click #titre'(evt){
        // un truc qui envoie sur la page d'accueil
        console.log("vous avez cliqué sur le titre");
    },

})

Template.titre.helpers({
    texte(){
        const titre = "Titre";
        console.log("coucou");
        return titre;
    }
})
