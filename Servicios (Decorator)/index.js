console.log("=== SERVICIOS DE CAFETERÍA ===");

// Servicio básico
let pedido = new Servicio();
console.log(`Comida normal: ${pedido.obtenerDescripcion()} | Costo: $${pedido.calcularCosto()}`);

// Pedido con espacio reservado y comida
pedido = new DecoradorEspacio(pedido);
pedido = new DecoradorComida(pedido, "Paste de pepperoni");
console.log(`Pedido 1: ${pedido.obtenerDescripcion()} | Costo: $${pedido.calcularCosto().toFixed(2)}`);

// Añadir barra fría y promoción
pedido = new DecoradorBarraFria(pedido, "Agua de Horchata");
pedido = new ServicioConPromocion(pedido, 0.15);
console.log(`Pedido 2: ${pedido.obtenerDescripcion()} | Costo final: $${pedido.calcularCosto().toFixed(2)}`);

// Ejemplo complejo
const megaPedido = new ServicioConPromocion(
    new DecoradorBarraFria(
        new DecoradorComida(
            new DecoradorEspacio(new Servicio()),
            "Ensalada César"
        ),
        "Agua mineral"
    ),
    0.20
);
console.log(`Pedido 3: ${megaPedido.obtenerDescripcion()} | Costo: $${megaPedido.calcularCosto().toFixed(2)}`);