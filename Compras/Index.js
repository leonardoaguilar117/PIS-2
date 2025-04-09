console.log("===== Compra en cafeteria =====");
const gestor = new GestorCompra();

// Productos disponibles
const cafe = new Alimento("Agua de horchata", 20, "bebida");
const panini = new Platillo("Pastes", ["jamón", "queso", "aguacate"], 17);
const muffin = new Alimento("Yogurt con gelatina", 20, "postre");

// Compra 1
const compra1 = gestor.nuevaCompra();
compra1.agregarItem(cafe);
compra1.agregarItem(panini);
compra1.setMetodoPago("efectivo");
compra1.finalizarCompra();

// Compra 2
const compra2 = gestor.nuevaCompra();
compra2.agregarItem(muffin);
compra2.agregarItem(new Alimento("Sincronizadas", 20, "Snack"));
compra2.setMetodoPago("tarjeta");
compra2.finalizarCompra();

// Mostrar historial
gestor.historial.mostrarHistorial();