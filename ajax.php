<?php
if($_GET['do'] == 'putData'){
    $data = json_decode(file_get_contents('php://input'));
    $json = json_encode($data);
    file_put_contents('shopBag.json', $json.PHP_EOL, FILE_APPEND);
    echo $json;
}