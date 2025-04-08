class CuentaUsuario extends Cuenta {
    constructor(nombre) {
        super("Usuario", nombre);
        this.pedidos = [];
    }

    // Métodos
    verMenu(menu) {
        console.log(`📜 ${this.nombre} está viendo el menú:`);
        menu.forEach((item, index) => console.log(`${index + 1}. ${item}`));
    }

    hacerPedido(item, menu) {
        if (menu.includes(item)) {
            this.pedidos.push(item);
            console.log(`${this.nombre} pidió: ${item}`);
        } else {
            console.log(`${item} no está disponible.`);
        }
    }

    verHistorial() {
        console.log(`Historial de ${this.nombre}:`);
        this.pedidos.forEach((pedido, index) => console.log(`${index + 1}. ${pedido}`));
    }
}
