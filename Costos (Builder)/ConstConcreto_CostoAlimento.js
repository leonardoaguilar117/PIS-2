class ConstConcreto_CostoAlimento extends ConstructorCosto {
    construirBase() {
        this.costo.base = 15; // Costo base de ingredientes
    }

    construirImpuestos() {
        this.costo.impuestos = this.costo.base * 0.10;
    }
}