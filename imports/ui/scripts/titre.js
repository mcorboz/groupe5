import { Template } from "meteor/templating";

Template.titre.events({
    'click #titre'(event){
        // un truc qui envoie sur la page d'accueil
        console.log("vous avez cliqué sur le titre");
    },

})

Template.titre.helpers({
    texte(){
        const titre = "test";
        return titre;
    }
})
