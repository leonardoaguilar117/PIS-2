console.log("=== SISTEMA DE SERVICIOS EXTERNOS ===");

// Autenticación
const auth = new CRUD_Autenticacion();
const sesion = auth.crear({ email: "usuario@example.com", pass: "123" });
console.log("Sesión iniciada:", sesion);
console.log("Token válido?", auth.validarToken(sesion.token));

// Servicios
const servicios = new CRUD_Servicios();
const qrServicio = servicios.generarQRservicio("limpieza");
console.log("QR Servicio:", qrServicio);

// Pagos
const pagos = new CRUD_Pago();
const qrPago = pagos.generarQRpago(150.50);
console.log("QR Pago:", qrPago);

// Espacios
const espacios = new CRUD_Espacio();
console.log("Estado de asientos:", espacios.obtenerEstadoAsientos());