class Cliente {
    constructor() {
        this.gestor = new GestorCosto(new ConstConcreto_CostoAlimento());
    }

    calcularCostos() {
        const builders = [
            new ConstConcreto_CostoAlimento(),
            new ConstConcreto_CostoPlatillo(),
            new ConstConcreto_CostoPromocion(),
            new ConstConcreto_CostoInsumo()
        ];

        console.log("=== CÁLCULO DE COSTOS ===");
        builders.forEach(builder => {
            this.gestor.cambiarBuilder(builder);
            const costo = this.gestor.construirCostoCompleto();
            console.log(`${builder.constructor.name.replace('ConstConcreto_', '')}: $${costo.calcularCosto().toFixed(2)}`);
        });
    }
}