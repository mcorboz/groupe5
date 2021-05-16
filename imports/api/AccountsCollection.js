import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// export the database for importers
export const Accounts = new Mongo.Collection("accounts");

// define the schema of the Accounts collection
Accounts.schema = new SimpleSchema({
    name: { 
        type: String,
        min: 4,
        max: 40,
    },
    pseudo: { type: String }, // enforcing `Date` as the type complicates things
    email: { type: String },
    password: { type: String },
});
