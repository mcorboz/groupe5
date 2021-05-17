import { Meteor } from 'meteor/meteor';
import { Accounts } from './AccountsCollection.js';

// method definitions for the accounts collection
Meteor.methods({
    // add a new account to the collection
    'accounts.add'(account) {
        // make sure the object fits in the collection's schema
        Accounts.schema.validate(account);

        // add the account to the collection
        let id = Accounts.insert(account);

        // return the newly-added object's ID
        return id;
    }
});