class ProxyEspacios extends CRUD_Espacios {
    constructor(espacio) {
        super();
        this.espacio = espacio;
    }

    crear(espacio) {
        return this.espacio.crear(espacio);
    }

    leer(id) {
        return this.espacio.leer(id);
    }

    actualizar(id, datos) {
        return this.espacio.actualizar(id, datos);
    }

    eliminar(id) {
        return this.espacio.eliminar(id);
    }

    estaDisponible(idEspacio, horario) {
        const horariosOcupados = this.espacio.getHorariosOcupados(idEspacio);
        return !horariosOcupados.includes(horario);
    }

    listarPorTipo(tipo) {
        return Array.from(this.espacio.espacios.values())
            .filter(espacio => espacio.tipo === tipo);
    }
}