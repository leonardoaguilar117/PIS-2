class HistorialHorario {
    constructor() {
        this.cambios = [];
    }

    registrarCambio(tipo, detalles) {
        this.cambios.push({
            fecha: new Date().toLocaleString(),
            tipo,
            detalles
        });
    }

    mostrarHistorial() {
        console.log("📚 Historial de cambios:");
        this.cambios.forEach(c =>
            console.log(`[${c.fecha}] ${c.tipo}:`, c.detalles)
        );
    }
}