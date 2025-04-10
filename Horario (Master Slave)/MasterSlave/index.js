function ejecutarPruebas() {
    console.log("===== CREACION DE HORARIOS =====");
    const gestor = new GestorHorario();

    // Creación de horarios
    gestor.horario.crearCambio("H1", {
        dia: "Lunes",
        apertura: "08:00",
        cierre: "16:00"
    });

    gestor.horario.crearCambio("H2", {
        dia: "Martes",
        apertura: "09:00",
        cierre: "17:30"
    });

    // Edición
    gestor.horario.editarHorario("H2", { cierre: "18:00" });

    // Consulta
    console.log("Consulta H1:", gestor.horario.consultarHorario("H1"));
    console.log("Consulta H3:", gestor.horario.consultarHorario("H3")); // No existe

    // Eliminación
    gestor.horario.eliminarHorario("H1");
    gestor.horario.eliminarHorario("H1"); // Intento fallido

    // Mostrar historial completo
    gestor.historial.mostrarHistorial();
}

// Ejecutar pruebas
ejecutarPruebas();