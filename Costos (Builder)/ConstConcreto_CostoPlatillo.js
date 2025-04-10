class ConstConcreto_CostoPlatillo extends ConstructorCosto {
    construirCostoPlatillo(base = 25) {
        this.reset();
        this.costo.tipo = "Platillo";
        this.costo.base = base;
        this.construirImpuestos();
        this.construirExtras();
        return this;
    }

    construirImpuestos() {
        this.costo.impuestos = this.costo.base * 0.15;
    }

    construirExtras() {
        this.costo.extras.push(5); // Costo presentación
    }

    obtenerCostoPlatillo() {
        return this.getResultado();
    }
}