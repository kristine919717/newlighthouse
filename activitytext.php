<?php
$dbhost ="localhost";
$dbuser ="u343571041_kris";
$dbpass ="dousha33";
$dbname ="u343571041_light";

//connect to the database
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname)
or die ('Cannot connect to db');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $activity = $_POST['activity'] ?? '';

  if($activity){
    $sql="SELECT * FROM `mariaday` WHERE id = ".$activity;
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc()){
    // echo "outcome:". $row['outcome'];
    $des=$row['des'];
    $image="images/activity/".$activity.".jpg";
    ?>

    <img src=<?php echo $image ?>>
    <p><?php echo $des ?></p>

    <?php
    }
  }
}

 ?>
