class Insumo {
    constructor(id, nombre, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    info() {
        return `${this.nombre} (ID: ${this.id}) - Stock: ${this.cantidad}`;
    }
}