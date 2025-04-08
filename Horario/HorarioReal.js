class HorarioReal extends CRUD_Horario {
    constructor() {
        super();
        this.horarios = new Map();
    }

    crear(horario) {
        this.horarios.set(horario.id, horario);
        console.log(`Horario creado: ${horario.dia} [${horario.apertura} - ${horario.cierre}]`);
        return true;
    }

    leer(id) { return this.horarios.get(id); }
    actualizar(id, datos) {
        const horario = this.leer(id);
        if (horario) Object.assign(horario, datos);
        return !!horario;
    }
    eliminar(id) { return this.horarios.delete(id); }
}