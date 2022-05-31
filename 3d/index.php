<?php
$file_out = "scene-9_on-09.jpg";

if (file_exists($file_out)) {
  // echo 'http://127.0.0.1/php_7x/vizualize/3d/' . $file_out;
  // return;

   // $image_info = getimagesize($file_out);
   // header('Content-Type: ' . $image_info['mime']);
   // header('Content-Length: ' . filesize($file_out));
   // readfile($file_out);

   $path = $file_out;
   $type = pathinfo($path, PATHINFO_EXTENSION);
   $data = file_get_contents($path);
   // $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
   $base64 = base64_encode($data);
   echo $base64;
}
else {
  // echo 'http://127.0.0.1/php_7x/vizualize/3d/404.jpg';
  // return;
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");
}
