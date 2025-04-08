class GestorInventario {
    constructor() {
        this.builder = new ConstructorInventario();
        this.inventario = new ProxyInventario(new Inventario());
    }

    crearInsumo(id, nombre, cantidad) {
        return this.builder
            .agregarId(id)
            .agregarNombre(nombre)
            .agregarCantidad(cantidad)
            .construir();
    }

    agregarInsumo(id, nombre, cantidad) {
        const insumo = this.crearInsumo(id, nombre, cantidad);
        this.inventario.agregarInsumo(insumo);
        console.log(`➕ Insumo agregado: ${insumo.info()}`);
    }

    eliminarInsumo(id) {
        this.inventario.eliminarInsumo(id);
        console.log(`➖ Insumo eliminado (ID: ${id})`);
    }

    generarReporte() {
        console.log("📋 Reporte de Inventario:");
        this.inventario.inventarioReal.listarInsumos().forEach(i => 
            console.log(` - ${i.info()}`)
        );
    }
}