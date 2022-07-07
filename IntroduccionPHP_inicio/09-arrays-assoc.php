<?php include 'includes/header.php';

//Son iguales a los objetos en js

$cliente = [
    "nombre" => "Eduardo",
    "saldo" => 200,
    "informacion" => [
        "tipo" => "premium"
    ]
];

echo "<pre>";
var_dump($cliente);
echo "</pre>";

//Accedes a una propiedad
echo $cliente["nombre"];
echo $cliente["informacion"]["tipo"];

//Agregar más propiedades
$cliente["codigo"] = 184986516;

include 'includes/footer.php';