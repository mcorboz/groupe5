import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Login.html';

Template.Login.events({
    'submit .login'(event) {
		// don't do default HTTP form submission
		event.preventDefault();

		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;
		Meteor.loginWithPassword(username, password, (error) => {
			if (error) {
				alert(error.message);
			} else {
				FlowRouter.go('Home');
			}
		});
	},
});
