class MetodoPago {
    constructor() {
        if (new.target === MetodoPago) {
            throw new Error("No se puede instanciar la clase abstracta MetodoPago");
        }
    }

    realizarPago(monto) {
        throw new Error("Método abstracto: realizarPago() debe ser implementado");
    }
}