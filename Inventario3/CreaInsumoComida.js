class CreaInsumoComida extends ConstructorInventario {
    crearInsumo(id, nombre, cantidad) {
        const insumo = new Insumo(id, nombre, "Comida", "Cocina Principal");
        insumo.actualizarCantidad(cantidad);
        return insumo;
    }
}