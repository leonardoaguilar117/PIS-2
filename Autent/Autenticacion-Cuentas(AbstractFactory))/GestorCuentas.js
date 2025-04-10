class GestorCuentas {
    constructor(fabrica) {
        this.fabrica = fabrica;
    }

    crearCuenta(nombre) {
        return this.fabrica.crearCuenta(nombre);
    }
}