class ProxyEspacios extends CRUD_Espacios {
    constructor(espacioReal) {
        super();
        this.espacioReal = espacioReal;
    }

    crear(espacio) {
        return this.espacioReal.crear(espacio);
    }

    leer(id) {
        return this.espacioReal.leer(id);
    }

    actualizar(id, datos) {
        return this.espacioReal.actualizar(id, datos);
    }

    eliminar(id) {
        return this.espacioReal.eliminar(id);
    }

    estaDisponible(idEspacio, horario) {
        const horariosOcupados = this.espacioReal.getHorariosOcupados(idEspacio);
        return !horariosOcupados.includes(horario);
    }

    listarPorTipo(tipo) {
        return Array.from(this.espacioReal.espacios.values())
            .filter(espacio => espacio.tipo === tipo);
    }
}
