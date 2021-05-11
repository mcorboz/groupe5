import './Project_show.html';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Projects } from '/imports/api/ProjectsCollection.js';

import '/imports/ui/components/NotFound/NotFound.js';

Template.Project_show.onCreated(function() {
    this.getProjectId = () => FlowRouter.getParam('_id');
    // autorun is smart and runs whenever the result of dependencies change 
    // (in this case: this.getProjectId(), i.e. FlowRouter.getParam('_id'))
    this.autorun(() => {
        // subscribing using this.subscribe subscribes only this
        // template instance (http://blazejs.org/api/templates.html#Template-instances)
        // which is nice bc it means we don't have to stop the subscription
        // manually when we don't need it anymore
        this.subscribe('projects.byId', this.getProjectId());
    });
});

Template.Project_show.helpers({
    projectExists() {
        const project = Projects.findOne({
            _id: FlowRouter.getParam('_id'),
        });
        return !!project;
    },

    projectId() {
        _id = FlowRouter.getParam('_id');
        return _id;
    },
    
    projectName() {
        let project = Projects.findOne({
            _id: FlowRouter.getParam('_id'),
        });
        return project.name;
    },

    projectDateStart() {
        const project = Projects.findOne({
            _id: FlowRouter.getParam('_id'),
        });
        return project.dateStart;
    },

    projectDateEnd() {
        const project = Projects.findOne({
            _id: FlowRouter.getParam('_id'),
        });
        return project.dateEnd;
    },
});
