// === Ejecución ===
const gestor = new GestorEspacios();

gestor.agregarEspacio("A1", "Asiento");
gestor.agregarEspacio("B2", "Asiento");
gestor.agregarEspacio("C3", "Asiento");

gestor.reservas.reservarConHorario("A1", "Samuel Santana Victoria", "10:00 AM");
gestor.reservas.reservarConHorario("B2", "Ana Laura Villeda", "02:00 PM");
gestor.reservas.reservarConHorario("A1", "Carlos Alonso Martínez", "10:00 AM"); // Fallará

gestor.mostrarDisponibles();
gestor.buscarPorTipo("Asiento");
gestor.reservas.cancelarReserva("B2");