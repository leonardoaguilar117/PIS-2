// === Código principal (antes en Cliente.probarSistema) ===
console.log("=== Costos ===");

const costoAlimento = new ConstConcreto_CostoAlimento()
    .construirCostoAlimento(18)
    .obtenerCostoAlimento();
costoAlimento.mostrarCosto();

const costoPlatillo = new ConstConcreto_CostoPlatillo()
    .construirCostoPlatillo(30)
    .obtenerCostoPlatillo();
costoPlatillo.mostrarCosto();

const costoPromo = new ConstConcreto_CostoPromocion()
    .construirCostoPromocion(40, 10)
    .obtenerCostoPromocion();
costoPromo.mostrarCosto();

const costoInsumo = new ConstConcreto_CostoInsumo()
    .construirCostoInsumo(10)
    .obtenerCostoInsumo();
costoInsumo.mostrarCosto();