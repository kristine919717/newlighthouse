<?php
$dbhost ="localhost";
$dbuser ="u343571041_kris";
$dbpass ="dousha33";
$dbname ="u343571041_light";

//connect to the database
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname)
or die ('Cannot connect to db');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $house_id = $_POST['house_id'] ?? '';
  $activity = $_POST['activity'] ?? '';

  if($house_id){
    $sql="SELECT * FROM outcome WHERE house_id = ".$house_id;
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc()){
    // echo "outcome:". $row['outcome'];
    $outcome=$row['outcome'];
    $image="images/donationimpact/".$house_id.".png";
    ?>

    <img src=<?php echo $image ?> alt="">
      <p><?php echo $outcome ?></p>

    <?php
    }
  }
  if($activity){
    $sql="SELECT * FROM outcome WHERE house = ".$activity;
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc()){
    // echo "outcome:". $row['outcome'];
    $des=$row['outcome'];
    // $image="images/donationimpact/".$house_id.".png";
    ?>

    <!-- <img src= -->
    <?php
    // echo $image
    ?>
    <!-- alt=""> -->
      <p><?php echo $des ?></p>

    <?php
    }
  }
}

 ?>
