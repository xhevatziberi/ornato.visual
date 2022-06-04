<?php
$json = file_get_contents('data.json');
$json = json_decode($json);
header('Content-Type: application/json; charset=utf-8');

$brand = $_GET['brand'];
$collection = $_GET['collection'];

$arr = [];
foreach ($json->data as $key => $data) {
  if ( $data->uuid == $brand ) {
    array_push($arr, $json->data[$key]);
  }
}

$json->data = $arr;
$json->meta->total = count($json->data);

echo json_encode( $json );
return;
