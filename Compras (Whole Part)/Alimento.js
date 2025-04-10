class Alimento {
    constructor(nombre, precio, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }

    describir() {
        return `${this.nombre} (${this.tipo}): $${this.precio}`;
    }
}