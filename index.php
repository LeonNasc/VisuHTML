<?php
session_start();

if(isset($_GET)){
    $_SESSION['lang'] = $_GET['lang'];
}
if(!$_GET['lang']){
        $_SESSION['lang']='pt';
}

include_once("VisuHTML_".$_SESSION['lang']. ".html");
 ?>
