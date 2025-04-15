class DecoradorComida extends DecoradorServicios {
    constructor(servicio, platillo = "Sandwich") {
        super(servicio);
        this.platillo = platillo;
        this.costoPlatillo = 18.00;
    }

    obtenerDescripcion() {
        return `${this.servicio.obtenerDescripcion()} + ${this.platillo}`;
    }

    calcularCosto() {
        return this.servicio.calcularCosto() + this.costoPlatillo;
    }
}
