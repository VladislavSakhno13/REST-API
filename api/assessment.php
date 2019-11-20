<?php
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE);

    $conect = new mysqli('127.0.0.1','root','','test');
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['id'])){
            $id = $conect->real_escape_string($_GET['id']);
            $sql = $conect->query("SELECT * FROM `assessment` WHERE id = '$id'");
            $data = $sql->fetch_assoc();
        } else{
            $data = array();
            $sql = $conect->query("SELECT * FROM `assessment`");
            while ($d = $sql->fetch_assoc()) {
                $data[] = $d;   
            }
        }
        exit(json_encode($data));
    }
    else if($_SERVER['REQUEST_METHOD'] == 'POST'){
       

        if(isset($input['assessment'])){
           
            $conect->query("INSERT INTO assessment (assessment,person_id,place_id,assessment_id) VALUES ('$input[assessment]',$input[person_id],$input[place_id],$input[assessment_id])");
            $sql = $conect->query("SELECT `id`,`assessment`,`person_id`,`place_id`,`assessment_id` FROM `assessment` ORDER BY id DESC LIMIT 1");
            $data = $sql->fetch_assoc();
            exit(json_encode($data));
        } else exit(json_encode( array("status" => 'Error')));

        
        
    }
    else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
        if(!isset($_GET['id'])){
            exit(json_encode('error'));
        } else {
            
            $conect->query("UPDATE `assessment` SET assessment ='$input[assessment]'  WHERE `id` = $_GET[id]");
            $conect->query("UPDATE `assessment` SET person_id ='$input[person_id]'  WHERE `id` = $_GET[id]");
            $conect->query("UPDATE `assessment` SET place_id ='$input[place_id]'  WHERE `id` = $_GET[id]");
            $conect->query("UPDATE `assessment` SET assessment_id ='$input[assessment_id]'  WHERE `id` = $_GET[id]");
            $sql = $conect->query("SELECT `id`,`assessment`,`person_id`,`place_id`,`assessment_id` FROM `assessment` ORDER BY id DESC LIMIT 1");
            $data = $sql->fetch_assoc();
            exit(json_encode($data));
        }
        
       
    }
    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
            if(isset($_GET['id'])){
            $string = $conect->query("SELECT * FROM `assessment` WHERE `id` = $_GET[id]");
            $resault = mysqli_fetch_row($string);
            $data = [
                "id" => $_GET['id'],
                "assessment" => $resault[1]
            ];
            $conect->query("DELETE  FROM `assessment` WHERE `id` = $_GET[id]");
            exit(json_encode($data));
        } else exit(json_encode('error'));
    }
?>