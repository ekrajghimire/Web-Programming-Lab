<?php
if (isset($_POST["Submit"])) {
    $usn = $_POST["usn"];
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $gender = $_POST["gender"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["psw"];
    $cpsw = $_POST["cpsw"];

    echo '<table width="50%" border="0" cellspacing="0" cellpadding="10"><tr><th>USN</th><td>';
    echo "$usn";
    echo "</td></tr>";
    echo "<tr><th>First Name</th><td>";
    echo "$fname";
    echo "</td></tr>";
    echo "<tr><th>Last Name</th><td>";
    echo "$lname";
    echo "</td></tr>";
    echo "<tr><th>Gender</th><td>";
    echo "$gender";
    echo "</td></tr>";
    echo "<tr><th>Email</th><td>";
    echo "$email";
    echo "</td></tr>";
    echo "<tr><th>User Name</th><td>";
    echo "$username";
    echo "</td></tr>";
    echo "<tr><th>Password</th><td>";
    echo "$password";
    echo "</td></tr>";
    echo "<tr><th>Confirm Password</th><td>";
    echo "$cpsw";
    echo "</td></tr>";
    echo "</table>";
}
?>
