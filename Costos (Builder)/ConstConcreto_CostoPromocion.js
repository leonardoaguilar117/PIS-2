class ConstConcreto_CostoPromocion extends ConstructorCosto {
    construirCostoPromocion(base = 30, descuento = 7) {
        this.reset();
        this.costo.tipo = "Promoción";
        this.costo.base = base;
        this.costo.descuentos = descuento;
        return this;
    }

    obtenerCostoPromocion() {
        return this.getResultado();
    }
}