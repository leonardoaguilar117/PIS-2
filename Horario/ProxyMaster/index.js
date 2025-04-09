console.log("===== Horarios Cafeteria UAM-C =====");
const gestor = new GestorHorario();

// Horarios válidos
gestor.agregarHorario("H1", "Lunes", "08:00", "16:00");
gestor.agregarHorario("H2", "Sábado", "09:30", "13:00");

// Horario inválido (apertura posterior al cierre)
gestor.agregarHorario("H3", "Martes", "18:00", "09:00");

// Actualización válida
gestor.actualizarHorario("H2", { cierre: "16:00" });

// Eliminación
gestor.eliminarHorario("H1");

// Mostrar historial
gestor.historial.mostrarHistorial();