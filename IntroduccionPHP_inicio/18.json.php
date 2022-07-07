<?php include 'includes/header.php';


$productos = [
    [
        "nombre" => "tablet",
        "precio" => 200,
        "disponible" => true,

    ],
    [
        "nombre" => "television",
        "precio" => 500,
        "disponible" => true,

    ],

];

$js = json_encode($productos); //Convierte arreglo en string


include 'includes/footer.php';