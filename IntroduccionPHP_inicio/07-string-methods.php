<?php include 'includes/header.php';

$numero1 = "Eduardo";

//Extensión del string
echo strlen($numero1);

//Elimina espacios en blanco
$texto = trim($numero1);

//Convertir a mayusculas
echo strtoupper($numero1);

//Convertir a minusculas
echo strtolower($numero1);

//Remplazar cadena de texto
echo str_replace("Eduardo", "E", $numero1 );

//Busca si existe un string existe o no
echo strpos($numero1, "Eduardo");

$tipocliente ="premium";
echo "El cliente" . $numero1 - "es" . $tipocliente;

include 'includes/footer.php';