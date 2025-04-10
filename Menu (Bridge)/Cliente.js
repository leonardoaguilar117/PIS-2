class Cliente {
    constructor() {
        this.menu = new Menu(new IMenuPlatillo());
    }

    cambiarMenu(tipo) {
        this.menu = new Menu(
            tipo === 'platillos' ? new IMenuPlatillo() : new IMenuAlimentos()
        );
    }

    verMenu() {
        this.menu.mostrarMenuFormateado();
    }
}