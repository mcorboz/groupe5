import { Meteor } from 'meteor/meteor';

// import the Projects collection and the associated methods and publications
import { Projects } from '/imports/api/ProjectsCollection';
import '/imports/api/ProjectsPublications.js';
import '/imports/api/ProjectsMethods.js';

Meteor.startup(function() {
    if (Meteor.isServer) {
        console.log('Hi from the server.');
    }
})
