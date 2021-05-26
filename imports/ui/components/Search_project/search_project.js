import './search_project.html';

Template.Search_project.onCreated(function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
});

Template.Search_project.onCreated(function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.nodeValue.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
});