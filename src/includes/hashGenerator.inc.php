<?php

const PASSWORD_TEMPLATE = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';



function main()
{
    $errors = [];
    $password = '';
    $hash = '';
    if (!isset($_POST['password']) || empty($_POST['password'])) {
        $errors[] = 'Password is empty.';
    } else {
        $password = $_POST['password'];
        if (!preg_match(PASSWORD_TEMPLATE, $password)) {
            $errors[] = 'The password does not meet the requirements';
        }
    }

    if (empty($errors)) {
        $hash = generateHash($password);
    }

    return json_encode(["errors" => $errors, "hash" => $hash]);
}


function generateHash($password)
{

    $hash = '';
    try {
        $sanitizedPassword = filter_var($password, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $hash = password_hash($sanitizedPassword, PASSWORD_BCRYPT);
    } catch (Exception $e) {
        header("HTTP/1.1 500 Internal Server Error");
        die();
    }

    return htmlspecialchars($hash);
}


echo main();
