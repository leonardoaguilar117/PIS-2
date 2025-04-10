class Costo extends ICosto {
    constructor() {
        super();
        this.base = 0;
        this.impuestos = 0;
        this.descuentos = 0;
        this.extras = [];
        this.tipo = "";
    }

    calcularCosto() {
        return (this.base + this.impuestos - this.descuentos) +
            this.extras.reduce((sum, extra) => sum + extra, 0);
    }

    mostrarCosto() {
        console.log(`📊 Detalle de costo (${this.tipo}):`);
        console.log(`- Base: $${this.base}`);
        console.log(`- Impuestos: $${this.impuestos}`);
        console.log(`- Descuentos: $${this.descuentos}`);
        console.log(`- Extras: $${this.extras.reduce((a, b) => a + b, 0)}`);
        console.log(` TOTAL: $${this.calcularCosto().toFixed(2)}\n`);
    }
}