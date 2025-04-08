const gestor = new GestorInventario();

// Agregar insumos válidos
gestor.agregarInsumo(1, "Jitomates", 50);
gestor.agregarInsumo(2, "Huevos", 100);
gestor.agregarInsumo(3, "Kilos de pollo", 15);


// Intentar agregar insumo inválido (error en builder)
try {
    gestor.agregarInsumo(-1, "", -5); // Error: ID inválido
} catch (e) {
    console.error(`❌ ${e.message}`);
}

// Intentar agregar ID duplicado (error en proxy)
try {
    gestor.agregarInsumo(1, "Jitomate", 30); // Error: ID ya existe
} catch (e) {
    console.error(`❌ ${e.message}`);
}

// Eliminar insumo
gestor.eliminarInsumo(2);

// Generar reporte final
gestor.generarReporte();