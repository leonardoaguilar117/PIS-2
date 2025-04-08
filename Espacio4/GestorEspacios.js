class GestorEspacios {
    constructor() {
        const espacioReal = new EspacioReal();
        this.proxy = new ProxyEspacios(espacioReal);
        this.reservas = new ReservaEspacios(this.proxy);
    }

    agregarEspacio(id, tipo) {
        const espacio = { id, tipo, reservado: false };
        return this.proxy.crear(espacio);
    }

    mostrarDisponibles() {
        const espacios = Array.from(this.proxy.espacioReal.espacios.values())
            .filter(espacio => !espacio.reservado);
        console.log("📋 Espacios disponibles:");
        espacios.forEach(espacio => console.log(`- ${espacio.id} (${espacio.tipo})`));
    }

    buscarPorTipo(tipo) {
        const resultados = this.proxy.listarPorTipo(tipo);
        console.log(`🔎 ${resultados.length} espacios de tipo ${tipo}:`);
        resultados.forEach(espacio => console.log(`- ${espacio.id}`));
    }
}