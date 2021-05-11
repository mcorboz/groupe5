import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './Project_show.html';

//const subscriptionHandle = Meteor.subscribe('projects.byId', FlowRouter.getParam('_id'));

Template.Project_show.onCreated(function() {
    this.getProjectId = () => FlowRouter.getParam('_id');

    // autorun is smart and runs whenever dependencies change
    this.autorun(() => {
        // subscribing using this.subscribe subscribes only this
        // template instance (http://blazejs.org/api/templates.html#Template-instances)
        // which is nice bc it means we don't have to stop the subscription
        // manually
        this.subscribe('Projects.byId', this.getProjectId());
    });
});

Template.Project_show.helpers({
    getProjectId() {
        return Template.instance().getProjectId();
    },
});
