import { FlowRouter } from 'meteor/kadira:flow-router';
import './Project_show.html';
import '/imports/ui/components/NotFound/NotFound.html';

//const subscriptionHandle = Meteor.subscribe('projects.byId', FlowRouter.getParam('_id'));

Template.Project_show.onCreated(function() {
    this.getProjectId = () => FlowRouter.getParam('_id');

    // autorun is smart and runs whenever the result of dependencies change 
    // (in this case: this.getProjectId(), i.e. FlowRouter.getParam('_id'))
    this.autorun(() => {
        // subscribing using this.subscribe subscribes only this
        // template instance (http://blazejs.org/api/templates.html#Template-instances)
        // which is nice bc it means we don't have to stop the subscription
        // manually when we don't need it anymore
        this.subscribe('Projects.byId', this.getProjectId());
    });
});

Template.Project_show.helpers({
    getProjectId() {
        return Template.instance().getProjectId();
    },
    
    getProjectName() {
        return 'nameTest';
    }
});
