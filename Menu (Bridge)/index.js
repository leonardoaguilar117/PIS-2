const cliente = new Cliente();

console.log("=== Menú Principal ===");
cliente.verMenu();

console.log("\n=== Menú Alternativo ===");
cliente.cambiarMenu('alimentos');
cliente.verMenu();