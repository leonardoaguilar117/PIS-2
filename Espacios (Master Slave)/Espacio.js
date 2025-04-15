class Espacio {
    constructor() {
        this.espacios = new Map();
        this.horarios = new Map();
    }

    crear(espacio) {
        if (!espacio.tipo) throw new Error("Tipo de espacio es requerido.");
        this.espacios.set(espacio.id, { ...espacio, reservado: false });
        console.log(`Espacio ${espacio.id} (${espacio.tipo}) creado.`);
        return true;
    }

    leer(id) {
        return this.espacios.get(id) || null;
    }

    actualizar(id, datos) {
        const espacio = this.espacios.get(id);
        if (!espacio) return false;
        this.espacios.set(id, { ...espacio, ...datos });
        return true;
    }

    eliminar(id) {
        return this.espacios.delete(id);
    }

    asignarHorario(idEspacio, horario) {
        if (!this.horarios.has(idEspacio)) {
            this.horarios.set(idEspacio, []);
        }
        this.horarios.get(idEspacio).push(horario);
        console.log(`Horario asignado a ${idEspacio}: ${horario}`);
    }

    getHorariosOcupados(idEspacio) {
        return this.horarios.get(idEspacio) || [];
    }

    estaDisponible(idEspacio, horario) {
        const ocupados = this.getHorariosOcupados(idEspacio);
        return !ocupados.includes(horario);
    }

    listarPorTipo(tipo) {
        return Array.from(this.espacios.values()).filter(e => e.tipo === tipo);
    }
}