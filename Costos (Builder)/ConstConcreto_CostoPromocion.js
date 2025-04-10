class ConstConcreto_CostoPromocion extends ConstructorCosto {
    construirBase() {
        this.costo.base = 30;
    }

    construirDescuentos() {
        this.costo.descuentos = 7; // Descuento promocional
    }
}