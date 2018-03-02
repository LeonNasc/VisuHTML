<?php
session_start();

if(isset($_GET)){
    
    if(!$_GET['lang']){
        $_SESSION['lang']='pt';
    }
    
    
    $_SESSION['lang'] = $_GET['lang'];
}
else
    include_once("VisuHTML_".$_SESSION['lang'].html)
    
 ?>
