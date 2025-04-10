// Gestor de Costos
class GestorCosto {
    constructor(builder) {
        this.builder = builder;
    }

    cambiarBuilder(builder) {
        this.builder = builder;
    }

    construirCostoCompleto() {
        this.builder.reset();
        this.builder.construirBase();
        this.builder.construirImpuestos();
        this.builder.construirDescuentos();
        this.builder.construirExtras();
        return this.builder.getResultado();
    }
}