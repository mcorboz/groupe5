FlowRouter.route('/', {
    name: 'Home',
    action: function(params, queryParams) {
        console.log('params:', params);
        console.log('queryParams:', queryParams);
        BlazeLayout.render('App', { main: 'Home_page' });
    },
});