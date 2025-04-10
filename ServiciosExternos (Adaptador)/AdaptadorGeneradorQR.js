class AdaptadorGeneradorQR {
    constructor() {
        this.generador = new GeneradorQR();
    }

    crear(datos) {
        return this.generador.generar(datos.codigo);
    }
}