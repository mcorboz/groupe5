import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Login.html';

Template.Login.events({
    'click #connection'(event) {
		event.preventDefault();
		const username = document.getElementById('pseudo').value;
		const password = document.getElementById('password').value;
		Meteor.loginWithPassword(username, password, (error) => {
			if (error) {
				alert(error.message);
			} else {
				setTimeout(() => FlowRouter.go('Home'), 200);
			}
		});
	},
});
