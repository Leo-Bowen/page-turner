$(document).ready(function () {

    $("#search").submit(function () {

        var search = document.getElementById("searchBar").value;
        if (search == "") {
            alert("Please enter something in the field");
        }
        else {
            var url = "";
            var img = "";
            var title = "";
            var author = "";
            //windows.open("/page-turner/search.php")
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                for (i = 0; i < response.items.length; i++) {
                    title = $('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');
                    author = $('<h5 class="center-align white-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr('src', url);
                    title.appendTo('#result');
                    author.appendTo('#result');
                    img.appendTo('#result');
                }
            });

        }
        return false;
    });

});

/* Fabian
$.getJSON("https://www.googleapis.com/books/v1/volumes?q=harry+potter", function (response) {
    console.log("JSON Data: " + response.items);
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];

        document.getElementById("title").innerHTML += "<td>" + item.volumeInfo.title + "</td>";
        document.getElementById("authors").innerHTML += "<td>" + item.volumeInfo.authors + "</td>";
        document.getElementById("books_table").innerHTML += "<td>" + item.volumeInfo.publishedDate + "</td>";
        document.getElementById("books_table").innerHTML += "<td>" + item.volumeInfo.pageCount + "</td>";

    }
});
 */