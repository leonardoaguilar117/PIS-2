class FabricaCuentaPersonal extends FabricaAbstractaCuentas {
    crearCuenta(nombre) {
        return new CuentaPersonalCocina(nombre);
    }
}