import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// export the database for importers
export const Projects = new Mongo.Collection("projects");

// define the schema of the Projects collection
Projects.schema = new SimpleSchema({
    name: { 
        type: String,
        min: 4,
        max: 40,
    },
    dateStart: { type: String }, // enforcing `Date` as the type complicates things
    dateEnd: { type: String },
    technicalTags: { type: Array },
    'technicalTags.$': { type: String },
    genreTags: { type: Array },
    'genreTags.$': { type: String },
});

// publications for the Projects collection
if(Meteor.isServer) {
    Meteor.publish('projects.byId', function(projectId) {
        // check type of id
        new SimpleSchema({
            _id: { type: String },
        }).validate({ _id: projectId });

        // return cursor into collection
        return Projects.find({ _id: projectId });
    });

    // method definitions for the Projects collection
    Meteor.methods({
        // add a new project to the collection
        'project.add'(project) {
            // make sure the object fits in the collection's schema
            Projects.schema.validate(project);

            // add the project to the collection
            let id = Projects.insert(project);

            // return the newly-added object's ID
            return id;
        }
    });
}