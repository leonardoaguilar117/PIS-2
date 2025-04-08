class Inventario extends IInventario {
    constructor() {
        super();
        this.insumos = new Map();
    }

    agregarInsumo(insumo) {
        this.insumos.set(insumo.id, insumo);
    }

    eliminarInsumo(id) {
        return this.insumos.delete(id);
    }

    listarInsumos() {
        return Array.from(this.insumos.values());
    }

    buscarPorNombre(nombre) {
        return this.listarInsumos().filter(i => i.nombre.includes(nombre));
    }

    actualizarCantidad(id, nuevaCantidad) {
        const insumo = this.insumos.get(id);
        if (insumo) insumo.cantidad = nuevaCantidad;
    }
}