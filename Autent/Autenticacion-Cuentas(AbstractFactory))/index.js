console.log("===== SISTEMA CAFETERIA UAM-C =====");

// 1. Configuración inicial
const fabricaAdmin = new FabricaCuentaAdministrador();
const admin = fabricaAdmin.crearCuenta("Emiliano Vargas Suarez");
admin.autenticar();
admin.agregarAlMenu("Empanadas");
admin.agregarUsuario("Carlos Benitez Bobadilla", "Usuario");
admin.generarReporte();

// 2. Usuario interactúa
const fabricaUsuario = new FabricaCuentaUsuario();
const usuario = fabricaUsuario.crearCuenta("Carlos Benitez Bobadilla");
usuario.autenticar();
usuario.verMenu(admin.menuRestaurante);
usuario.hacerPedido("Sandwich", admin.menuRestaurante);
usuario.hacerPedido("Empanada", admin.menuRestaurante);
usuario.verHistorial();

// 3. Personal de cocina trabaja
const fabricaPersonal = new FabricaCuentaPersonal();
const cocinero = fabricaPersonal.crearCuenta("Sofia Castro Flores");
cocinero.autenticar();
cocinero.ordenesPendientes.push({ item: "Sandwich", estado: "Pendiente" });
cocinero.verOrdenes();
cocinero.prepararOrden(0);
cocinero.actualizarInventario("Sandwich", -1);

// 4. Cierre de sesiones
admin.cerrarSesion();
usuario.cerrarSesion();
cocinero.cerrarSesion();