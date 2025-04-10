class Insumo extends Inventario {
    constructor(id, nombre, tipo, ubicacion) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.ubicacion = ubicacion;
        this.cantidad = 0;
    }

    actualizarCantidad(cantidad) {
        this.cantidad += cantidad;
        console.log(`🔄 ${this.nombre}: ${this.cantidad} unidades`);
    }

    mostrarDetalles() {
        console.log(
            `📌 ${this.id} | ${this.nombre}\n` +
            `Tipo: ${this.tipo}\n` +
            `Ubicación: ${this.ubicacion}\n` +
            `Stock: ${this.cantidad}\n${'-'.repeat(30)}`
        );
    }
}