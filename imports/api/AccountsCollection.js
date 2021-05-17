import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// export the database for importers
export const Accounts = new Mongo.Collection("accounts");

// define the schema of the Accounts collection
Accounts.schema = new SimpleSchema({
    pseudo: { type: String },
    email: { type: String },
    password: { type: String },
});
