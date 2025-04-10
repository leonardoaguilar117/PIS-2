class ConstConcreto_CostoInsumo extends ConstructorCosto {
    construirCostoInsumo(base = 8) {
        this.reset();
        this.costo.tipo = "Insumo";
        this.costo.base = base;
        this.construirImpuestos();
        this.construirExtras();
        return this;
    }

    construirImpuestos() {
        this.costo.impuestos = 1.20;
    }

    construirExtras() {
        this.costo.extras.push(2); // Empaque
    }

    obtenerCostoInsumo() {
        return this.getResultado();
    }
}