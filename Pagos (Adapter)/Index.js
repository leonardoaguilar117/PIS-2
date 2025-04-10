console.log("===== Pagos cafeteria =====");
const gestor = new GestorPago();

// Pagos de prueba
gestor.realizarPago('efectivo', 1500);
gestor.realizarPago('tarjeta', 3200, { numeroTarjeta: '4111111111111111' });
gestor.realizarPago('paypal', 875, { email: 'edgar.sotelo@cua.uam.com' });

// Listar pagos
gestor.listarPagos();