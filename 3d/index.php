<?php
// header('Content-Type: application/json; charset=utf-8');
// $file_out = "scene-9_on-09.jpg";

$json = json_decode(file_get_contents("php://input"), true);
$file_out = $json['room_data']['room']['id'];
$file_out .= '-';
$file_out .= $json['room_data']['room']['walls'][0]['wallpaper']['uuid'];
$file_out .= '.jpg';
// echo json_encode( $file_out );
// return;


if (file_exists($file_out)) {
   $path = $file_out;
   $type = pathinfo($path, PATHINFO_EXTENSION);
   $data = file_get_contents($path);
   // $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
   $base64 = base64_encode($data);
   echo $base64;
}
else {

  $path = "404.jpg";
  $data = file_get_contents($path);
  $base64 = base64_encode($data);
  echo $base64;
}
