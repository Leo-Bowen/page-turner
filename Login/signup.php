<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/page-turner/login/controllers/authController.php';
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?> 


<body>
    
<div class="container bg">
    <div class="row">
        <div class="col-md-4 offset-md-4 form-div login">
        <form action="signup.php" method="post">
        <h3 class = "text-center">Register  </h3>


        <?php if(count($errors)):?>
        <div class="alert alert-danger">
            <?php foreach($errors as $error): ?>
            <li><?php echo $error; ?></li>
            <?php endforeach; ?>
        
        </div>
        <?php endif; ?>

        <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name= "username" value= "<?php echo $username; ?>" class= "form-control form-control-lg">
        </div>

        <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name= "email" value= "<?php echo $email; ?>" class= "form-control form-control-lg">
        </div>

        <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name= "password" class= "form-control form-control-lg">
        </div>

        <div class="form-group">
        <label for="passwordConf">Confirm Password</label>
        <input type="password" name= "passwordConf" class= "form-control form-control-lg">
        </div>
        <div class="form-group">
            <button type="submit" name="signup-btn" class="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
        <p class= "text-center">Already a member? <a href="login.php">Sign In</a></p>
        </form>
        </div>

    </div>
</div>

</body>
</html>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>
