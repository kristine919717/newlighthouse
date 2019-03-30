<?php
$dbhost ="localhost";

$dbuser ="root";
$dbpass ="dousha33";
$dbname ="lighthouse";


//connect to the database
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname)
or die ('Cannot connect to db');

$conn->query("SET CHARACTER SET utf8");

$sql = "SELECT `year`,`million` FROM `Number of single parent families in Canada from 2006 to 2017`;";

  $result = $conn->query($sql);

  $data = array();

  while ($row = $result->fetch_assoc()){
    $data[] = $row;
    }

    echo json_encode($data);


?>
