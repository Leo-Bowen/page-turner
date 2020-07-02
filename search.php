<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>



    <body>
    <div id="container">

        <p id="result"></p>



    <script>
        $('#searchbar').keypress(function (e) {
            if (e.which == 13) {
                sessionStorage.setItem("searchTerm", $('#searchBar').val());
            }
        });


        $(document).ready(function () {
            var search = sessionStorage.getItem('searchTerm');
            if (search == "") {
                alert("Please enter something in the field");
            }
            else {
                var url = "";
                var img = "";
                var title = "";
                var author = "";
                $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

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
    </script>
    </div>
    </body>



<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>