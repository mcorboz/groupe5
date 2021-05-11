import { Mongo } from 'meteor/mongo';
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
