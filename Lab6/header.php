<?php
    session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>

    <body>
        <div class = "header-login">
            <?php
                if (isset($_SESSION['userId'])) {
                    echo '<form action = "includes/logout.php" method = "post">
                        <button type = "submit" name = "logout-submit"> Logout </button>
                      </form>';
                }
                else {
                    echo '<form action = "includes/login.php" method = "post">
                        <input type = "text" name = "mailuid" placeholder = "Username/E-mail">
                        <input type = "password" name = "pwd" placeholder = "Password">
                        <button type = "submit" name = "login-submit"> Login </button>
                      </form>
                      <a href="signup.php">Signup</a>';
                }
            ?>

        </div>
    </body>
</html>
