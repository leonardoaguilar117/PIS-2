class Servicio extends IServicios {
    constructor() {
        super();
        this.descripcion = "Comida de estudiante";
        this.costo = 10.00;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    calcularCosto() {
        return this.costo;
    }
}
