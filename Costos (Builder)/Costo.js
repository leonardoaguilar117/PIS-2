class Costo extends ICosto {
    constructor() {
        super();
        this.base = 0;
        this.impuestos = 0;
        this.descuentos = 0;
        this.extras = [];
    }

    calcularCosto() {
        return (this.base + this.impuestos - this.descuentos) +
            this.extras.reduce((sum, extra) => sum + extra, 0);
    }
}