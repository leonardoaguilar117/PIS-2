class GestorHorario {
    constructor() {
        this.proxy = new ProxyHorario(new HorarioReal());
        this.historial = new HistorialHorario();
    }

    agregarHorario(id, dia, apertura, cierre) {
        const horario = { id, dia, apertura, cierre };
        const resultado = this.proxy.crear(horario);
        if (resultado) this.historial.agregarRegistro("CREACIÓN", horario);
        return resultado;
    }

    actualizarHorario(id, nuevosDatos) {
        const resultado = this.proxy.actualizar(id, nuevosDatos);
        if (resultado) this.historial.agregarRegistro("ACTUALIZACIÓN", this.proxy.leer(id));
        return resultado;
    }

    eliminarHorario(id) {
        const horario = this.proxy.leer(id);
        const resultado = this.proxy.eliminar(id);
        if (resultado) this.historial.agregarRegistro("ELIMINACIÓN", horario);
        return resultado;
    }
}