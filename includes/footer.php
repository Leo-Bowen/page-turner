<!-- Footer -->
<script>
    window.onbeforeunload = function () {
        sessionStorage.setItem('searchTerm', $('#searchbar').val());
    };
</script>
<!-- search js only works if its implemented after the html form -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>

<footer class="page-footer pt-4">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-8 mt-md-0 mt-3">

                <!-- Content -->
                <h5 class="text-uppercase">Page Turner</h5>
                Favoritenstraße 226, 1100 Wien<br>
                <a href="tel:+62896706255135">01 60668776600</a><br>
                <p><a href="mailto:offiziellpageturner@gmail.com">offiziellpageturner@gmail.com</a></p>

            </div>
            <!-- Grid column -->

            <hr class="clearfix w-100 d-md-none pb-3">


            <!-- Grid column -->
            <div class="col-md-3 mb-md-0 mb-3">

                <!-- Links -->
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                    <li>
                        <a href="/page-turner/about.php">About Us</a>
                    </li>
                    <li>
                        <a href="/page-turner/faq.php">FAQ</a>
                    </li>
                    <li>
                        <a href="/page-turner/terms.php">Terms and Services</a>
                    </li>
                </ul>

            </div>
            <!-- Grid column -->

        </div>
        <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Page Turner, Ltd - All Right Reserved.
    </div>
    <!-- Copyright -->

</footer>
<!-- Footer -->
