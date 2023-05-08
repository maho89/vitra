<?php
/*
res([
    "layout"=>"login"
]);*/

res([
    "layout"=>"main",
    "pages"=>[
        ['title'=>'პროდუქტები','name'=>'products'],
        ['title'=>'მომხმარებლები','name'=>'users'],
    ]
]);
function res($m=[]){
    header('Access-Control-Allow-Origin: *');
    header("Content-type: application/json; charset=utf-8");
    ob_start('ob_gzhandler');
    die(json_encode($m, JSON_NUMERIC_CHECK ));
}
exit();
