class QR {
    constructor(codigo) {
        this.codigo = codigo || Math.random().toString(36).substring(2, 15);
    }

    generarQR() {
        return `|| QR: ${this.codigo} ||`;
    }
}