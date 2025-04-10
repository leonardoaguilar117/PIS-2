class Inventario {
    constructor() {
        this.insumos = new Map();
    }

    agregarInsumo(insumo) {
        this.insumos.set(insumo.id, insumo);
    }

    buscarInsumo(id) {
        return this.insumos.get(id);
    }

    listarInventario() {
        console.log("📦 Inventario actual:");
        this.insumos.forEach(insumo => insumo.mostrarDetalles());
    }
}