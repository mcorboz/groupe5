// need to import the templates that we route to
import '/imports/ui/templates/Home_page.html';

FlowRouter.route('/', {
    name: 'Home',
    action: function() {
        BlazeLayout.render('App', { main: 'Home_page' });
    },
});
