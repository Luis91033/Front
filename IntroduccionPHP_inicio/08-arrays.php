<?php include 'includes/header.php';

$carrito = ["tablet", "computadora", "television"];

//Util para ver los contenidos de un array
echo "<pre>";
var_dump($carrito);
echo "</pre>";

//Acceder a un elemento del array
$carrito[3] = "Nuevo Producto";

//Añadir un elemento nuevo al final

array_push($carrito, "audifonos");


include 'includes/footer.php';