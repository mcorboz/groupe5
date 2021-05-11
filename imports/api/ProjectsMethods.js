import { Meteor } from 'meteor/meteor';
import { Projects } from './ProjectsCollection.js';

// method definitions for the Projects collection
Meteor.methods({
    // add a new project to the collection
    'projects.add'(project) {
        // make sure the object fits in the collection's schema
        Projects.schema.validate(project);

        // add the project to the collection
        let id = Projects.insert(project);

        // return the newly-added object's ID
        return id;
    }
});
