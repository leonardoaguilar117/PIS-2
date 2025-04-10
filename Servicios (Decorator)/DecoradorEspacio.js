class DecoradorEspacio extends DecoradorServicios {
    constructor(servicio) {
        super(servicio);
        this.espacio = "Asiento reservado";
    }

    obtenerDescripcion() {
        return `${this.servicio.obtenerDescripcion()} + ${this.espacio}`;
    }

}