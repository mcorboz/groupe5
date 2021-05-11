import { FlowRouter } from 'meteor/kadira:flow-router';
import { Projects } from '/imports/api/projects';

import './Project_show.html';

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
        this.subscribe('Projects.byId', this.getProjectId());
    });
});

Template.Project_show.helpers({
    projectId() {
        _id = Template.instance().getProjectId();
        console.log(_id);
        console.log(Projects.find({})[0]);
        console.log(Projects.findOne({ _id }));
        return _id;
    },
    
    projectName() {
        const project = Projects.findOne({
            _id: Template.instance().getProjectId()
        });
        return project.name;
    },
});
