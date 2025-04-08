class ConstructorInventario {
    constructor() {
        this.reset();
    }

    reset() {
        this.insumo = new Insumo();
    }

    agregarId(id) {
        if (id <= 0) throw new Error("ID inválido");
        this.insumo.id = id;
        return this; // Permite encadenamiento
    }

    agregarNombre(nombre) {
        if (!nombre) throw new Error("Nombre requerido");
        this.insumo.nombre = nombre;
        return this;
    }

    agregarCantidad(cantidad) {
        if (cantidad < 0) throw new Error("Cantidad no puede ser negativa");
        this.insumo.cantidad = cantidad;
        return this;
    }

    construir() {
        if (!this.insumo.id || !this.insumo.nombre) {
            throw new Error("Insumo incompleto");
        }
        const insumo = this.insumo;
        this.reset();
        return insumo;
    }
}