class IMenuPlatillo extends ImplementadorMenu {
    obtenerItems() {
        return [
            { nombre: "Pollo en salsa verde, arroz, sopa de pasta y frijoles", precio: 10, tipo: "platillo" },
            { nombre: "Picadillo, sopa de verdura, arroz y frijoles", precio: 10, tipo: "platillo" }
        ];
    }
}