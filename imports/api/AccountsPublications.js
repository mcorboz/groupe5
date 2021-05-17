import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import { Accounts } from './AccountsCollection.js';

Meteor.publish('accounts.byId', function(accountId) {
    // check type of id
    new SimpleSchema({
        _id: { type: String },
    }).validate({ _id: accountId });

    // return cursor into collection
    return Accounts.find({ _id: accountId });
});
