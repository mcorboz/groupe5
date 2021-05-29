Meteor.publish('users.public', function() {
    return Meteor.users.find(
        {},
        { 
            fields: { 
                username: 1, 
                emails: 1 ,
            },
        },
    );
});

