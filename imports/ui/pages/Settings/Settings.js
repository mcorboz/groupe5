import './Settings.html';

Template.Settings.events({
    'click #nightMode':function(){
        if (document.body.style.backgroundColor == 'white') {
        document.body.style.backgroundColor = 'grey';
        }
        else {
            document.body.style.backgroundColor = 'white';
        }
    }
});