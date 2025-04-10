class ConexionBD {
    constructor() {
        if (ConexionBD.instancia) {
            return ConexionBD.instancia;
        }
        this.conectado = false;
        ConexionBD.instancia = this;
    }

    conectar() {
        console.log("🔌 Conectando a la base de datos...");
        this.conectado = true;
        return this;
    }

    desconectar() {
        console.log("🛑 Desconectando de la base de datos...");
        this.conectado = false;
    }

    ejecutarQuery(query) {
        if (!this.conectado) throw new Error("Error: Base de datos no conectada");
        console.log(`📊 Query ejecutada: ${query}`);
        // Simulamos datos de respuesta
        return {
            id: Math.floor(Math.random() * 1000),
            timestamp: new Date().toISOString(),
            query: query,
            data: Array(3).fill().map((_, i) => ({ id: i, value: Math.random().toString(36).substring(7) }))
        };
    }
}
