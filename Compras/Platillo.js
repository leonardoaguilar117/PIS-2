class Platillo {
    constructor(nombre, ingredientes, precio) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }

    detallar() {
        return `🍽️ ${this.nombre} ($${this.precio})\nIngredientes: ${this.ingredientes.join(', ')}`;
    }
}