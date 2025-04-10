class Menu extends AbstraccionMenu {
    mostrarMenuFormateado() {
        const items = this.mostrarMenu();
        console.log("🍴 Menú:");
        items.forEach(item =>
            console.log(`- ${item.nombre}: $${item.precio} (${item.tipo})`)
        );
    }
}