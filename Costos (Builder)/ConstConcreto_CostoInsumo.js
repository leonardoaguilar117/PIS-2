class ConstConcreto_CostoInsumo extends ConstructorCosto {
    construirBase() {
        this.costo.base = 8; // Costo de insumos básicos
    }

    construirImpuestos() {
        this.costo.impuestos = 1.20;
    }

    construirExtras() {
        this.costo.extras.push(2); // Costo de empaque
    }
}