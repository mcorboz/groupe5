import { Meteor } from 'meteor/meteor';
import { Projects } from './ProjectsCollection.js';

Meteor.publish('projects.byId', function(projectId) {
    // check type of id
    new SimpleSchema({
        _id: { type: String },
    }).validate({ _id: projectId });

    // return cursor into collection
    return Projects.find({ _id: projectId });
});
