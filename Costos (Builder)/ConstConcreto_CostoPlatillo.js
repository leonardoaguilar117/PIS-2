class ConstConcreto_CostoPlatillo extends ConstructorCosto {
    construirBase() {
        this.costo.base = 25; // Costo base de preparación
    }

    construirImpuestos() {
        this.costo.impuestos = this.costo.base * 0.15;
    }

    construirExtras() {
        this.costo.extras.push(5); // Costo extra por presentación
    }
}
