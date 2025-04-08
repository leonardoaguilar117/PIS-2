class GestorDeAutenticacion {
    constructor() {
        this.fabricaUsuario = new FabricaCuentaUsuario();
        this.fabricaAdmin = new FabricaCuentaAdministrador();
        this.gestorPersonal = new GestorCuentas(new FabricaCuentaPersonal());
    }

    crearCuenta(tipo, nombre) {
        switch (tipo) {
            case "admin":
                return this.fabricaAdmin.crearCuenta(nombre);
            case "usuario":
                return this.fabricaUsuario.crearCuenta(nombre);
            case "personal":
                return this.gestorPersonal.crearCuenta(nombre);
            default:
                throw new Error("Tipo de cuenta no válido");
        }
    }
}