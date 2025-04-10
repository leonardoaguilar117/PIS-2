class IMenuAlimentos extends ImplementadorMenu {
    obtenerItems() {
        return [
            { nombre: "Cheescake de queso con zarzamora", precio: 35, tipo: "snack" },
            { nombre: "Boing de Uva", precio: 8.00, tipo: "bebida" },
            { nombre: "Hotdogs", precio: 18.00, tipo: "snack" }
        ];
    }
}