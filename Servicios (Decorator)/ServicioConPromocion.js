class ServicioConPromocion extends DecoradorServicios {
    constructor(servicio, descuento = 0.10) {
        super(servicio);
        this.descuento = descuento;
    }

    obtenerDescripcion() {
        return `${this.servicio.obtenerDescripcion()} [PROMO ${this.descuento * 100}%]`;
    }

    calcularCosto() {
        return this.servicio.calcularCosto() * (1 - this.descuento);
    }
}