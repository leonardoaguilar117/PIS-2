class FabricaCuentaAdministrador extends FabricaAbstractaCuentas {
    crearCuenta(nombre) {
        return new CuentaAdministrador(nombre);
    }
}