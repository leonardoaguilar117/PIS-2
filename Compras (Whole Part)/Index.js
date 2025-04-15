console.log("===== Compra en cafeteria =====");
const gestor = new GestorCompra();

// Compra 1
const compra1 = gestor.nuevaCompra();
const cafe = new compra1.Alimento("Agua de horchata", 20, "bebida");
const panini = new compra1.Platillo("Pastes", ["jamón", "queso", "aguacate"], 17);
compra1.agregarItem(cafe);
compra1.agregarItem(panini);
compra1.setMetodoPago("efectivo");
compra1.finalizarCompra();

// Compra 2
const compra2 = gestor.nuevaCompra();
const muffin = new compra2.Alimento("Yogurt con gelatina", 20, "postre");
const snack = new compra2.Alimento("Sincronizadas", 20, "Snack");
compra2.agregarItem(muffin);
compra2.agregarItem(snack);
compra2.setMetodoPago("tarjeta");
compra2.finalizarCompra();

// Mostrar historial
gestor.historial.mostrarHistorial();
