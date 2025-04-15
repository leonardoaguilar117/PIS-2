class CuentaPersonalCocina extends Cuenta {
    constructor(nombre) {
        super("Personal Cocina", nombre);
        this.ordenesPendientes = [];
        this.inventario = { Sandwiches: 10, Hamburguesa: 15, Ensalada: 8 };
    }

    verOrdenes() {
        console.log(`📦 Órdenes pendientes:`);
        this.ordenesPendientes.forEach((orden, index) =>
            console.log(`${index + 1}. ${orden.item} (${orden.estado})`)
        );
    }

    prepararOrden(index) {
        if (this.ordenesPendientes[index]) {
            this.ordenesPendientes[index].estado = "En preparación";
            console.log(`${this.nombre} está preparando: ${this.ordenesPendientes[index].item}`);
        }
    }

    actualizarInventario(item, cantidad) {
        this.inventario[item] += cantidad;
        console.log(`📝 ${this.nombre} actualizó inventario: ${item} (${cantidad} unidades)`);
    }
}