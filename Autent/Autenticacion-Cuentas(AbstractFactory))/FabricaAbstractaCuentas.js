// Fábrica abstracta principal
class FabricaAbstractaCuentas {
    crearCuenta(nombre) {
        throw new Error("Método abstracto: crearCuenta() debe ser implementado");
    }
}
