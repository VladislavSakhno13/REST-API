<?php
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE);

    $conect = new mysqli('127.0.0.1','root','','test');
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['id'])){
            $id = $conect->real_escape_string($_GET['id']);
            $sql = $conect->query("SELECT rewievs FROM `rewievs` WHERE id = '$id'");
            $data = $sql->fetch_assoc();
        } else{
            $data = array();
            $sql = $conect->query("SELECT * FROM `reviews`");
            while ($d = $sql->fetch_assoc()) {
                $data[] = $d;   
            }
        }
        exit(json_encode($data));
    }
    else if($_SERVER['REQUEST_METHOD'] == 'POST'){
       

        if(isset($input['reviews'])){
            $data = date("YmdHis");
            $conect->query("INSERT INTO `reviews` (reviews,pubdate) VALUES('$input[reviews]',$data)");
            $sql = $conect->query("SELECT `id`,`reviews` FROM `reviews` ORDER BY id DESC LIMIT 1");
            $data = $sql->fetch_assoc();
            exit(json_encode($data));
        } else exit(json_encode( array("status" => 'Error')));

        
        
    }
    else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
        if(!isset($_GET['id'])){
            exit(json_encode('error'));
        } else {
            
            $conect->query("UPDATE `reviews` SET `reviews` = '$input[reviews]'  WHERE `id` = $_GET[id]");
            $sql = $conect->query("SELECT `id`,`name` FROM `persons` ORDER BY id DESC LIMIT 1");
            $data = $sql->fetch_assoc();
            exit(json_encode($data));
        }
        
       
    }
    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
            if(isset($_GET['id'])){
            $string = $conect->query("SELECT * FROM `reviews` WHERE `id` = $_GET[id]");
            $resault = mysqli_fetch_row($string);
            $data = [
                "id" => $_GET['id'],
                "reviews_del" => $resault[1]
            ];
            $conect->query("DELETE  FROM `reviews` WHERE `id` = $_GET[id]");
            exit(json_encode($data));
        } else exit(json_encode('error'));
    }
?>