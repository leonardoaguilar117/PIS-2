class ProxyInventario {
    constructor(inventarioReal) {
        this.inventarioReal = inventarioReal;
    }

    agregarInsumo(insumo) {
        if (this.inventarioReal.insumos.has(insumo.id)) {
            throw new Error(`ID ${insumo.id} ya existe`);
        }
        this.inventarioReal.agregarInsumo(insumo);
    }

    eliminarInsumo(id) {
        if (!this.inventarioReal.insumos.has(id)) {
            throw new Error(`ID ${id} no encontrado`);
        }
        return this.inventarioReal.eliminarInsumo(id);
    }
}