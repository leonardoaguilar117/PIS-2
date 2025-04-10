// === CRUD base ===
class CRUD_Espacios {
    crear(espacio) {
        throw new Error("Método abstracto: crear() debe ser implementado");
    }

    leer(id) {
        throw new Error("Método abstracto: leer() debe ser implementado");
    }

    actualizar(id, datos) {
        throw new Error("Método abstracto: actualizar() debe ser implementado");
    }

    eliminar(id) {
        throw new Error("Método abstracto: eliminar() debe ser implementado");
    }
}
