class DecoradorServicios extends IServicios {
    constructor(servicio) {
        super();
        this.servicio = servicio;
    }

    obtenerDescripcion() {
        return this.servicio.obtenerDescripcion();
    }

    calcularCosto() {
        return this.servicio.calcularCosto();
    }
}