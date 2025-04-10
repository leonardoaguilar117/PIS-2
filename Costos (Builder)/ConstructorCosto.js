class ConstructorCosto {
    constructor() {
        this.costo = new Costo();
    }

    reset() {
        this.costo = new Costo();
    }

    construirBase() { throw new Error("Método abstracto") }
    construirImpuestos() { throw new Error("Método abstracto") }
    construirDescuentos() { throw new Error("Método abstracto") }
    construirExtras() { throw new Error("Método abstracto") }

    getResultado() {
        return this.costo;
    }
}
