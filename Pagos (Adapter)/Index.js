console.log("===== Pagos cafeteria =====");
const gestor = new GestorPago();

// Pagos de prueba
gestor.realizarPago('efectivo', 15);
gestor.realizarPago('tarjeta', 300, { numeroTarjeta: '41213211456731' });
gestor.realizarPago('paypal', 85, { email: 'edgar.sotelo@cua.uam.com' });

// Listar pagos
gestor.listarPagos();