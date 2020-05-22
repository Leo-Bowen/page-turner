<?php require_once 'controllers/authController.php'; //MVC 
include('C:\xampp\htdocs\LoginFolder\page-turner\includes/header.php');
include('C:\xampp\htdocs\LoginFolder\page-turner\includes/nav.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Login</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-4 form-div login">
        <form action="login.php" method="post">
        <h3 class = "text-center">Login</h3>

        <?php if(count($errors)):?>
        <div class="alert alert-danger">
            <?php foreach($errors as $error): ?>
            <li><?php echo $error; ?></li>
            <?php endforeach; ?>
        
        </div>
        <?php endif; ?>

        <div class="form-group">
        <label for="username">Username or E-Mail</label>
        <input type="text" name= "username" value= "<?php echo $username; ?>" class= "form-control form-control-lg">
        </div>
        
        <div class="form-group">
        <label for="password">Username</label>
        <input type="password" name= "password" class= "form-control form-control-lg">
        </div>
        
        <div class="form-group">
            <button type="submit" name="login-btn" class="btn btn-primary btn-block btn-lg">Login</button>
        </div>
        <p class= "text-center">Not yet a member? <a href="signup.php">Sign Up</a></p>
        </div>
    </div>
</div>

</body>
</html>
<?php
include('C:\xampp\htdocs\LoginFolder\page-turner\includes\footer.php');
?>