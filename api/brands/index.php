<?php
header('Content-Type: application/json; charset=utf-8');
$json = file_get_contents('data.json');
echo $json; return;
$json = json_decode($json);

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
