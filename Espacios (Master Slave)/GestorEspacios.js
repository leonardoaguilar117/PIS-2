class GestorEspacios {
    constructor() {
        this.espacio = new Espacio();
        this.reservas = new ReservaEspacios(this.espacio);
    }

    agregarEspacio(id, tipo) {
        const espacio = { id, tipo, reservado: false };
        return this.espacio.crear(espacio);
    }

    mostrarDisponibles() {
        const disponibles = Array.from(this.espacio.espacios.values())
            .filter(e => !e.reservado);
        console.log(" Espacios disponibles:");
        disponibles.forEach(e => console.log(`- ${e.id} (${e.tipo})`));
    }

    buscarPorTipo(tipo) {
        const encontrados = this.espacio.listarPorTipo(tipo);
        console.log(`🔎 ${encontrados.length} espacios de tipo ${tipo}:`);
        encontrados.forEach(e => console.log(`- ${e.id}`));
    }
}