class FabricaCuentaUsuario extends FabricaAbstractaCuentas {
    crearCuenta(nombre) {
        return new CuentaUsuario(nombre);
    }
}