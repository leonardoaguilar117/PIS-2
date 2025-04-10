class GestorInventario {
    constructor() {
        this.inventario = new Inventario();
        this.creadores = {
            comida: new CreaInsumoComida(),
            barra: new CreaInsumoBarraFria()
        };
    }

    agregarInsumo(tipo, id, nombre, cantidad) {
        const creador = this.creadores[tipo];
        if (!creador) throw new Error("Tipo de insumo inválido");

        const insumo = creador.crearInsumo(id, nombre, cantidad);
        this.inventario.agregarInsumo(insumo);
    }
}