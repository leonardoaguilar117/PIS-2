class HistorialHorario {
    constructor() {
        this.registros = [];
    }

    agregarRegistro(accion, horario) {
        this.registros.push({
            fecha: new Date().toISOString(),
            accion,
            ...horario
        });
    }

    mostrarHistorial() {
        console.log("📜 Historial de cambios:");
        this.registros.forEach(reg => {
            console.log(`[${reg.fecha}] ${reg.accion}: ${reg.dia} [${reg.apertura} - ${reg.cierre}]`);
        });
    }
}