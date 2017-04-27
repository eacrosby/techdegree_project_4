// Search Function 

function imgSearch() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchBox');
    filter = input.value.toLowerCase();
    console.log(filter);
    ul = document.getElementById("imgs");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}