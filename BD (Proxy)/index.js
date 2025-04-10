console.log("=== SIMULACIÓN DEL SISTEMA COMPLETO ===");

// 1. Autenticación
const authProxy = new ProxyAutenticacion();
authProxy.autenticar({
    email: "admin@cafeteria.com",
    password: "securepassword123"
});

// 2. Registrar compra
const comprasProxy = new ProxyCompras();
comprasProxy.registrarCompra({
    usuarioId: 1,
    items: ["Café", "Panini"],
    total: 8.50
});

// 3. Actualizar inventario
const inventarioProxy = new ProxyInventario();
inventarioProxy.actualizarInventario({
    id: 42,
    cantidad: 150
});

// 4. Procesar pago
const pagoProxy = new ProxyPago();
pagoProxy.procesarPago({
    monto: 8.50,
    metodo: "tarjeta",
    referencia: "VISA-1234"
});

// 5. Obtener menú
const menuProxy = new ProxyMenu();
menuProxy.obtenerMenu();

console.log("✅ Todas las operaciones completadas");