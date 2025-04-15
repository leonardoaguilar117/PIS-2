console.log("=== Menú Principal ===");
let menu = new Menu(new IMenuPlatillo());
menu.mostrarMenuFormateado();

console.log("\n=== Menú Alternativo ===");
menu = new Menu(new IMenuAlimentos());
menu.mostrarMenuFormateado();