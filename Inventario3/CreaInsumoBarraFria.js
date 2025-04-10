class CreaInsumoBarraFria extends ConstructorInventario {
    crearInsumo(id, nombre, cantidad) {
        const insumo = new Insumo(id, nombre, "Bebida", "Barra Fría");
        insumo.actualizarCantidad(cantidad);
        return insumo;
    }
}