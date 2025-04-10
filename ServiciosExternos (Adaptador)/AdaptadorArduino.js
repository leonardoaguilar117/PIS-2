class AdaptadorArduino {
    constructor() {
        this.arduino = new Arduino();
    }

    leer() {
        return this.arduino.leerEstadoAsientos();
    }
}