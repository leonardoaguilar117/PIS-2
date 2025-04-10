class AbstraccionMenu {
    constructor(implementador) {
        this.implementador = implementador;
    }

    mostrarMenu() {
        return this.implementador.obtenerItems();
    }
}
