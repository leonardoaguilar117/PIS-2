class ConstConcreto_CostoAlimento extends ConstructorCosto {
    construirCostoAlimento(base = 15) {
        this.reset();
        this.costo.tipo = "Alimento";
        this.costo.base = base;
        this.construirImpuestos();
        return this;
    }

    construirImpuestos() {
        this.costo.impuestos = this.costo.base * 0.10;
    }

    obtenerCostoAlimento() {
        return this.getResultado();
    }
}