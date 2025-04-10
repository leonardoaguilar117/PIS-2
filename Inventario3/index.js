console.log("===== INVENTARIO =====");
const gestor = new GestorInventario();

// Agregar insumos
gestor.agregarInsumo('comida', 'C1', 'Tomates', 50);
gestor.agregarInsumo('barra', 'B1', 'Naranjas', 30);
gestor.agregarInsumo('comida', 'C2', 'Kg de Pechuga de Pollo', 25);

// Mostrar inventario
gestor.inventario.listarInventario();