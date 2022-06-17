<?php
header('Content-Type: application/json; charset=utf-8');
$json = file_get_contents('data.json');
// echo $json; return;
$json = json_decode($json);
$q = json_decode( $_GET['q'] );

$query = '';
if ( isset( $q->{'$or'} ) ) {
  if ( isset( $q->{'$or'}[0] ) ) {
    if ( isset( $q->{'$or'}[0]->{'$like'} ) ) {
      if ( isset( $q->{'$or'}[0]->{'$like'}[1] ) ) {
        $query = isset( $q->{'$or'}[0]->{'$like'}[1];
      }
    }
  }
}

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
