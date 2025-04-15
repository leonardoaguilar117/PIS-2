
class GestorCosto {
    constructor(builder) {
        this.builder = builder;
    }

    cambiarBuilder(builder) {
        this.builder = builder;
    }

    construirCostoCompleto() {
        return this.builder.getResultado();
    }
}