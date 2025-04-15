class DecoradorBarraFria extends DecoradorServicios {
    constructor(servicio, bebida = "Agua de jamaica") {
        super(servicio);
        this.bebida = bebida;
        this.costoBebida = 25;
    }

    obtenerDescripcion() {
        return `${this.servicio.obtenerDescripcion()} + Bebida de barra fría (${this.bebida})`;
    }

    calcularCosto() {
        return this.servicio.calcularCosto() + this.costoBebida;
    }

}
