class Horario {
    constructor(historial) {
        this.horarios = new Map();
        this.historial = historial;
    }

    crearCambio(id, { dia, apertura, cierre }) {
        this.horarios.set(id, { dia, apertura, cierre });
        this.registrarCambio("CREACIÓN", { id, dia, apertura, cierre });
        return true;
    }

    editarHorario(id, nuevosDatos) {
        if (!this.horarios.has(id)) {
            console.log(`❌ Horario ${id} no existe`);
            return false;
        }

        const horarioActual = this.horarios.get(id);
        const actualizado = { ...horarioActual, ...nuevosDatos };
        this.horarios.set(id, actualizado);
        this.registrarCambio("EDICIÓN", { id, ...nuevosDatos });
        return true;
    }

    eliminarHorario(id) {
        if (!this.horarios.has(id)) {
            console.log(`❌ Horario ${id} no existe`);
            return false;
        }

        this.horarios.delete(id);
        this.registrarCambio("ELIMINACIÓN", { id });
        return true;
    }

    consultarHorario(id) {
        const horario = this.horarios.get(id);
        if (!horario) {
            console.log(`⚠️ Horario ${id} no encontrado`);
            return null;
        }
        return horario;
    }

    registrarCambio(tipo, detalles) {
        this.historial.registrarCambio(tipo, detalles);
    }
}