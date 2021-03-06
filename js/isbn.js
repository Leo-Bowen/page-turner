function initbook(isbn) {
    // Query the book database by ISBN code
    isbn = isbn;
    apikey = "AIzaSyAbpk3lk5Aqyl5gtgGZAtys07LosYH9_hU";

    var url =
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
        isbn +
        "&key=" +
        apikey;
    return url;
}

function getBookLists(isbn, price) {
    var results = fetch(initbook(isbn)) //Caution: asynchronous call, it may load certain books in a different order & it may load other commands before this one
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, categories, publisher, publishedDate, averageRating, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title"; //ternary Operator: How? --> Bedingung ? Ausdruck1: Ausdruck2
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["searchInfo"]["textSnippet"] != undefined) ? description = book["searchInfo"]["textSnippet"] : description = "No Text Snippet";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");
            //to display in html
            books.innerHTML = (
                "<div class=\"row\">\n" +
                "            <div class=\"col\">\n" +
                "                <a href='/page-turner/books/details.php?isbn=" + isbn + "&price=" + price + "'>\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + img + "' alt='" + title + "'>\n" +
                "                </a>\n" +
                "            </div>\n" +
                "            <div class=\"col\">\n" +
                "                <h3>" + title + "</h3>\n" +
                "                <h3><small>" + authors + "</small></h3>\n" +
                "                <h4><small>" + categories + "</small></h4>\n" +
                "                <p>" + description + "</p>\n" +
                "                <a class=\"btn btn-primary\" href='/page-turner/books/details.php?isbn=" + isbn + "&price=" + price + "'>View Details</a>\n" +
                "                <br><small>Publisher: " + publisher + "</small>\n" +
                "                <br><small>Published Date: " + publishedDate + "</small>\n" +
                "                <br><small>Rating: " + averageRating + "/5</small>\n" +
                "                <br><h4>Price: " + price + " €</h4>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );
            document.getElementById("books").appendChild(books); //appending
        });
}

function getBookDetails(isbn, price) {

    var results = fetch(initbook(isbn))
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, pageCount, categories, publisher, publishedDate, averageRating,
                ratingsCount, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title";
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["volumeInfo"]["description"] != undefined) ? description = book["volumeInfo"]["description"] : description = "No Description";
            (book["volumeInfo"]["pageCount"] != undefined) ? pageCount = book["volumeInfo"]["pageCount"] : pageCount = "Unknown";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "No Ratings yet";
            (book["volumeInfo"]["ratingsCount"] != undefined) ? ratingsCount = book["volumeInfo"]["ratingsCount"] : ratingsCount = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");
            price = parseFloat(price); //convert price to float
            //create object
            let bookobj = {title: title, isbn: isbn, price: price, amount: 0, authors: authors};

            //to display in html
            books.innerHTML = (
                "            <div class=\"row\">\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 400px' src='" + img + "' alt='" + title + "'><br>\n" +
                "                <div class=\"col-lg-6\">\n" +
                "                    <div class=\"product-details-info pl-lg--30 \">\n" +
                "                        <p class=\"tag-block\">Categories: " + categories + "" +
                "                        <h2 class=\"product-title\">" + title + "</h2>\n" +
                "                        <h4>" + authors + "</h4>\n" +
                "                        <ul class=\"list-unstyled\">\n" +
                "                            <li>Pages: " + pageCount +
                "                            <li>Publisher: " + publisher + "</li>\n" +
                "                            <li>Published Date: <span class=\"list-value\">  " + publishedDate + "</span></li>\n" +
                "                            <li>ISBN: <span class=\"list-value\"> " + isbn + "</span></li>\n" +
                "                            <li>Ratings: " + averageRating + "</li>\n" +
                "                        </ul>\n" +
                "                        <div class=\"price-block\"><hr>\n" +
                "                        <div class=\"row\">\n" +
                "                        <span class=\"price ml-3\"><h3>" + price + " €</h3></span>\n" +
                "                        </div><hr>\n" +
                "                        </div>\n" +
                "                        <div class=\"row ml-1\">\n" +
                "                            <div class=\"add-cart-btn\">\n" +
                "                                <div class=\"btn btn-primary\">Add to Cart</div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "            <div class=\"sb-custom-tab section-padding\"><br>\n" +
                "                <ul class=\"nav nav-tabs nav-style-2\" id=\"myTab2\" role=\"tablist\">\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link active\" id=\"tab1\" data-toggle=\"tab\" href=\"#tab-1\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-1\" aria-selected=\"true\">\n" +
                "                            DESCRIPTION\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link\" id=\"tab2\" data-toggle=\"tab\" href=\"#tab-2\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-2\" aria-selected=\"true\">\n" +
                "                            REVIEWS (" + ratingsCount + ")\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                </ul>\n" +
                "                <div class=\"tab-content space-db--20\" id=\"myTabContent\">\n" +
                "                    <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab1\">\n" +
                "                        <article class=\"review-article\">\n" +
                "                            <h1 class=\"sr-only\">Tab Article</h1>\n" +
                "                            <p>" + description + "</p>\n" +
                "                        </article>\n" +
                "                    </div>\n" +
                "                    <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"tab2\">\n" +
                "                        <div class=\"review-wrapper\">\n" +
                "    <ul style= \" list-style: none; background-color: #ccddff; \"id=\"orders\"></ul>\n" +
                "\n" +
                "    <section id=\"control-center\">\n" +
                "    <button id=\"get-btn\" type=\"button\" class=\"btn btn-secondary btn-block\">Load Reviews</button>\n" +
                "    <hr>\n" +
                "                                        <div class=\"col-12\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"name\">Title</label>\n" +
                "                                                <input type=\"text\" id=\"name\" class=\"form-control\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-12\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"name\">Comment</label>\n" +
                "                                                <textarea name=\"text\" id=\"text\" class=\"form-control\" cols=\"40\" rows=\"5\"></textarea>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "  <div class=\"row\">\n" +
                "    <div class=\"col\"><button id=\"post-btn\" type=\"button\" class=\"btn btn-success btn-block\">POST Review</button></div>\n" +
                "    <div class=\"col\"><button id=\"put-btn\" type=\"button\" class=\"btn btn-primary btn-block\">Change Review</button></div>\n" +
                "    <div class=\"col\"><button id=\"del-btn\" type=\"button\" class=\"btn btn-danger btn-block\">Delete Review</button></div>\n" +
                "  </div>\n" +
                "  </section>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n"
        )
            ;
            document.getElementById("books").appendChild(books);

            let button = books.getElementsByClassName('add-cart-btn');

            button[0].addEventListener('click', () => {
                addToCartSize(bookobj);
                totalCost(bookobj);
            });


        });


}

function getEBookLists(isbn) {
    var results = fetch(initbook(isbn))
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, listPrice, categories, publisher, publishedDate, averageRating, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title";
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["searchInfo"]["textSnippet"] != undefined) ? description = book["searchInfo"]["textSnippet"] : description = "No Text Snippet";
            (book["saleInfo"]["listPrice"]["amount"] != undefined) ? listPrice = book["saleInfo"]["listPrice"]["amount"] : listPrice = "";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";


            //to create in html
            let books = document.createElement("p");

            //to display in html
            books.innerHTML = (
                "<div class=\"row\">\n" +
                "            <div class=\"col\">\n" +
                "                <a href='/page-turner/ebooks/details.php?isbn=" + isbn + "'>\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + img + "' alt='" + title + "'>\n" +
                "                </a>\n" +
                "            </div>\n" +
                "            <div class=\"col\">\n" +
                "                <h3>" + title + "</h3>\n" +
                "                <h3><small>" + authors + "</small></h3>\n" +
                "                <h4><small>" + categories + "</small></h4>\n" +
                "                <p>" + description + "</p>\n" +
                "                <a class=\"btn btn-primary\" href='/page-turner/ebooks/details.php?isbn=" + isbn + "'>View Details</a>\n" +
                "                <br><small>Publisher: " + publisher + "</small>\n" +
                "                <br><small>Published Date: " + publishedDate + "</small>\n" +
                "                <br><small>Rating: " + averageRating + "/5</small>\n" +
                "                <br><h4>Price: " + listPrice + " €</h4>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );
            document.getElementById("books").appendChild(books);
        });
}

function getEBookDetails(isbn) {
    var results = fetch(initbook(isbn))
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, listPrice, pageCount, categories, publisher, publishedDate, averageRating,
                ratingsCount, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title";
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["volumeInfo"]["description"] != undefined) ? description = book["volumeInfo"]["description"] : description = "No Description";
            (book["saleInfo"]["listPrice"]["amount"] != undefined) ? listPrice = book["saleInfo"]["listPrice"]["amount"] : listPrice = "";
            (book["volumeInfo"]["pageCount"] != undefined) ? pageCount = book["volumeInfo"]["pageCount"] : pageCount = "Unknown";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "No Ratings yet";
            (book["volumeInfo"]["ratingsCount"] != undefined) ? ratingsCount = book["volumeInfo"]["ratingsCount"] : ratingsCount = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");
            //create object
            let bookobj = {title: title, isbn: isbn, price: listPrice, amount: 0, authors: authors};

            //to display in html
            books.innerHTML = (
                "            <div class=\"row\">\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 400px' src='" + img + "' alt='" + title + "'><br>\n" +
                "                <div class=\"col-lg-6\">\n" +
                "                    <div class=\"product-details-info pl-lg--30 \">\n" +
                "                        <p class=\"tag-block\">Categories: " + categories + "" +
                "                        <h2 class=\"product-title\">" + title + "</h2>\n" +
                "                        <h4>" + authors + "</h4>\n" +
                "                        <ul class=\"list-unstyled\">\n" +
                "                            <li>Pages: " + pageCount +
                "                            <li>Publisher: " + publisher + "</li>\n" +
                "                            <li>Published Date: <span class=\"list-value\">  " + publishedDate + "</span></li>\n" +
                "                            <li>ISBN: <span class=\"list-value\"> " + isbn + "</span></li>\n" +
                "                            <li>Ratings: " + averageRating + "</li>\n" +
                "                        </ul>\n" +
                "                        <div class=\"price-block\"><hr>\n" +
                "                        <div class=\"row\">\n" +
                "                        <span class=\"price ml-3\"><h3>" + listPrice + " €</h3></span>\n" +
                "                        </div><hr>\n" +
                "                        </div>\n" +
                "                        <div class=\"row ml-1\">\n" +
                "                            <div class=\"add-cart-btn\">\n" +
                "                                <div class=\"btn btn-primary\">Add to Cart</div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "            <div class=\"sb-custom-tab section-padding\"><br>\n" +
                "                <ul class=\"nav nav-tabs nav-style-2\" id=\"myTab2\" role=\"tablist\">\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link active\" id=\"tab1\" data-toggle=\"tab\" href=\"#tab-1\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-1\" aria-selected=\"true\">\n" +
                "                            DESCRIPTION\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link\" id=\"tab2\" data-toggle=\"tab\" href=\"#tab-2\" role=\"tab\"\n" +
                "                            aria-controls=\"tab-2\" aria-selected=\"true\">\n" +
                "                            REVIEWS (" + ratingsCount + ")\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                </ul>\n" +
                "                <div class=\"tab-content space-db--20\" id=\"myTabContent\">\n" +
                "                    <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab1\">\n" +
                "                        <article class=\"review-article\">\n" +
                "                            <h1 class=\"sr-only\">Tab Article</h1>\n" +
                "                            <p>" + description + "</p>\n" +
                "                        </article>\n" +
                "                    </div>\n" +
                "                    <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"tab2\">\n" +
                "                        <div class=\"review-wrapper\">\n" +
                "    <ul style= \" list-style: none; background-color: #ccddff; \"id=\"orders\"></ul>\n" +
                "\n" +
                "    <section id=\"control-center\">\n" +
                "    <button id=\"get-btn\" type=\"button\" class=\"btn btn-secondary btn-block\">Load Reviews</button>\n" +
                "    <hr>\n" +
                "                                        <div class=\"col-12\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"name\">Title</label>\n" +
                "                                                <input type=\"text\" id=\"name\" class=\"form-control\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-12\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"name\">Comment</label>\n" +
                "                                                <textarea name=\"text\" id=\"text\" class=\"form-control\" cols=\"40\" rows=\"5\"></textarea>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "  <div class=\"row\">\n" +
                "    <div class=\"col\"><button id=\"post-btn\" type=\"button\" class=\"btn btn-success btn-block\">POST Review</button></div>\n" +
                "    <div class=\"col\"><button id=\"put-btn\" type=\"button\" class=\"btn btn-primary btn-block\">Change Review</button></div>\n" +
                "    <div class=\"col\"><button id=\"del-btn\" type=\"button\" class=\"btn btn-danger btn-block\">Delete Review</button></div>\n" +
                "  </div>\n" +
                "  </section>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n"
            );
            document.getElementById("books").appendChild(books);


            let button = books.getElementsByClassName('add-cart-btn');

            button[0].addEventListener('click', () => {
                addToCartSize(bookobj);
                totalCost(bookobj);
            });


        });
}

function findGetParameter(parameterName) { //method to retrieve GET data from url
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

/*
Cart Functions
 */

function addToCartSize(bookobj) {
    let totalcartsize = localStorage.getItem('totalcartsize');

    totalcartsize = parseInt(totalcartsize);

    if (totalcartsize) {
        localStorage.setItem('totalcartsize', totalcartsize + 1);
        document.querySelector('.nav-link span').textContent = totalcartsize + 1;
    } else { //intialize
        localStorage.setItem('totalcartsize', 1);
        document.querySelector('.nav-link span').textContent = totalcartsize;
    }
    setItems(bookobj);
    updateCartSize();
}

function updateCartSize() {

    let totalcartsize = localStorage.getItem('totalcartsize');

    document.querySelector('.nav-link span').textContent = totalcartsize;

}

function setItems(bookobj) {
    let cartItems = localStorage.getItem('cartlist');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        if (cartItems[bookobj.title] == undefined) {
            cartItems = {
                ...cartItems,
                [bookobj.title]: bookobj
            }
        }
        cartItems[bookobj.title].amount += 1;
    } else {
        bookobj.amount = 1;
        cartItems = {
            [bookobj.title]: bookobj
        }
    }

    localStorage.setItem("cartlist", JSON.stringify(cartItems));
}

function totalCost(bookobj) {
    let totalcost = localStorage.getItem('totalcost');

    if (totalcost != null) {
        totalcost = parseFloat(totalcost);
        localStorage.setItem("totalcost", totalcost + bookobj.price);
    } else {
        localStorage.setItem("totalcost", bookobj.price);
    }
}

function displayCart() {

    let cartItems = localStorage.getItem('cartlist');
    let total = localStorage.getItem('totalcost');
    total = parseFloat(total);
    console.log(typeof total);

    cartItems = JSON.parse(cartItems);
    let listcontainer = document.querySelector(".product");
    let sumcontainer = document.querySelector(".sum");

    if (cartItems && listcontainer) {
        Object.values(cartItems).map(item => {
            listcontainer.insertAdjacentHTML("beforeend", `
                                                            <tr>
                                                                <th scope="row" class="border-0">
                                                                    <div class="p-2">
                                                                     <ion-icon name="close-circle-outline" onclick="removeFromCart('${item.title}')" ></ion-icon>
                                                                        <div class=" d-inline-block align-middle">
                                                                            <h4 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">${item.title}</a></h4><h5 class="text-muted font-weight-normal font-italic d-block">${item.authors}</h5>
                                                                              <div class="row">
                                                                                <div class="col-lg-auto">
                                                                                    <strong>Price: </strong>${item.price}<span> €</span>
                                                                                </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                <div class="col-lg-auto">
                                                                                    <strong>Quantity: </strong>${item.amount}
                                                                                </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                <div class="col-lg-auto">
                                                                                    <strong>Total: </strong>${(item.price * item.amount).toFixed(2)}<span> €</span>
                                                                                </div>
                                                                              </div>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                            <hr>
`)
        });

        sumcontainer.innerHTML += `<div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-12">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                    <div class="p-4">
                        <ul class="list-unstyled mb-4">
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>${(total / 1.2).toFixed(2)} €</strong></li>
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>${(total / 6).toFixed(2)} €</strong></li>
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                <h5 class="font-weight-bold">${total.toFixed(2)} €</h5>
                            </li>
                        </ul>
                        <div id="paypal-button-container" class="text-center"></div>
                    </div>
                </div>
            </div>
        `
    }

}

function removeFromCart(bookobj) {

    let totalcartsize = localStorage.getItem('totalcartsize');
    let cartlist = localStorage.getItem('cartlist');

    totalcartsize = parseInt(totalcartsize);

    if (totalcartsize)
    localStorage.setItem('totalcartsize', totalcartsize - 1);
    document.querySelector('.nav-link span').textContent = totalcartsize - 1;

    localStorage.removeItem(cartlist);

    updateCartSize();
    //totalCost();
    //displayCart();
}

//for recensions

let value = findGetParameter('isbn');


    const get = function () { //GET Method
        let request = new XMLHttpRequest();
        let url = "./rest.php/recensions/" + value;
        let asynchronous = true;

        var $orders = $('#orders')
        request.open("GET", url, asynchronous);
        request.send();

        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                $orders.append('<li style="padding-left: 16px;padding-top: 16px "> <h4>' + data.title + '</h4></li><li style="padding-left: 16px; "><h5>' + data.body + '</h5></li><li style="padding-left: 20px;">By:    Anonymous user </li> <br>');
                console.log(data);
            }
        }
    }

    const post = function () { //POST method
        var $name = $('#name');
        var $text = $('#text');
        var $orders = $('#orders')

        let recension1 = {
            title: $name.val(),
            body: $text.val()
        };

        let recension_json = JSON.stringify(recension1);
        $.ajax({
            type: 'POST',
            url: "rest.php/recensions/" + value,
            data: recension_json,
            success: function () {
                alert("Use the Get Button to see your Review!");
            },
            error: function () {
                alert("Use Put Button, because there is already a file!");
            }
        });

    }

    const put = function () { //PUT method
        var $name = $('#name');
        var $text = $('#text');
        var $orders = $('#orders')

        let recension1 = {
            title: $name.val(),
            body: $text.val()
        };

        let recension_json = JSON.stringify(recension1);
        $.ajax({
            type: 'PUT',
            url: "rest.php/recensions/" + value,
            data: recension_json,
            success: function () {
                alert("Use the Get Button to see your Review!");
            },
            error: function () {
                alert("No file created currently, use the Post Button!");
            }

        });

    }

    const del = function () { //delete method
        $.ajax({
            type: 'DELETE',
            url: "rest.php/recensions/" + value,
            complete: function (data) {
                alert("Please refresh your page!");
                //location.reload();
            }

        })
    }


    $(document).on("click", "#get-btn", get);
    $(document).on("click", "#post-btn", post); //wann post oder put
    $(document).on("click", "#put-btn", put);
    $(document).on("click", "#del-btn", del);




displayCart();