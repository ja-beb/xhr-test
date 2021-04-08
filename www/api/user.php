<?php
    if ( array_key_exists('role_id', $_POST) )
    {
        echo json_encode([
            'name' => $_POST['name'] ?? null,
            'role_id' => $_POST['role_id'] ?? null,
        ]);       
    }
    else
    {
        http_response_code(500);
        echo 'invalid input'; 
    }
    