class Compra {
    constructor() {
        this.items = [];
        this.total = 0;
        this.historial = null;
        this.pago = null;

        // Clases internas
        this.Alimento = class {
            constructor(nombre, precio, tipo) {
                this.nombre = nombre;
                this.precio = precio;
                this.tipo = tipo;
            }

            describir() {
                return `${this.nombre} (${this.tipo}): $${this.precio}`;
            }
        };

        this.Platillo = class {
            constructor(nombre, ingredientes, precio) {
                this.nombre = nombre;
                this.ingredientes = ingredientes;
                this.precio = precio;
            }

            detallar() {
                return `🍽️ ${this.nombre} ($${this.precio})\nIngredientes: ${this.ingredientes.join(', ')}`;
            }
        };

        this.ComprobanteCompra = class {
            constructor(id, total, fecha = new Date().toLocaleString()) {
                this.id = id;
                this.total = total;
                this.fecha = fecha;
            }

            generarComprobante() {
                return `🟢 COMPROBANTE #${this.id}\nTotal: $${this.total}\nFecha: ${this.fecha}`;
            }
        };
    }

    agregarItem(item) {
        this.items.push(item);
        this.total += item.precio;
    }

    setMetodoPago(metodo) {
        const id = `PAGO-${Date.now().toString().slice(-6)}`;
        this.pago = {
            metodo,
            comprobante: new this.ComprobanteCompra(id, this.total)
        };
    }

    finalizarCompra() {
        if (!this.pago) throw new Error("Método de pago no definido");

        console.log(`💳 Pago de $${this.total} via ${this.pago.metodo}`);
        const comprobante = this.pago.comprobante;

        if (this.historial) this.historial.agregarCompra(this);

        console.log(comprobante.generarComprobante());
        return comprobante;
    }
}
