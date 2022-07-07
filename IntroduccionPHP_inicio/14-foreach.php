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


foreach($productos as $producto) { ?>
    <li>
        <p>Producto: <?php echo $producto["nombre"]; ?> </p>
        <p>Precio: <?php echo "$" .$producto["nprecio"]; ?> </p>
        <p><?php echo($producto["disponible"]) ?"Disponible" : "No disponible"; ?> </p>
    </li>
<?php
}

include 'includes/footer.php';