class Arduino {
    leerEstadoAsientos() {
        return {
            A1: Math.random() < 0.5,
            A2: Math.random() < 0.5,
            B1: Math.random() < 0.5
        };
    }
}
