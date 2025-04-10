class GeneradorQR {
    generar(codigo) {
        return `|| QR_${codigo}_${Math.random().toString(36).substr(2, 6)} ||`;
    }
}
