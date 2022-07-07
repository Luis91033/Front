<?php include 'includes/header.php';


//Buscar elementos en un arreglo
$carrito = ["tablet"];
in_array("tablet", $carrito);

//Ordenar elementos en un arreglo 
$numeros = array (1,2,4,5,3);
sort($numeros); //de menor a mayor
rsort($numeros); //de mayor a menor

//Arreglo asociativo
$cliente = array (
    "saldo" => 200,
    "tipo" => "premium",
    "nombre" => "Lalo"
);
//Los ordena primero por valor y luego por orden alfabetico
asort($cliente);

//Ordena por valores con la z primero
arsort($cliente);

//Ordena por llaves en orden alfabetico
ksort($cliente);

//Ordena por llaves en orden alfabetico pero de la z a la a
krsort($cliente);


include 'includes/footer.php';