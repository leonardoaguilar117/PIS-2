/* PROYECTO DE INGENIERIA DE SOFTWARE 2 
   IMPLEMENTACION DE COMPRA CON WHOLE PART: Se toma la clase de compra como elemento a constituir por otras clases: 
   * Platillo
   * Alimento
   * Lugar
   * Pago
   Es decir: Una compra está conformada por 1 o varios platillos, 1 o varios alimentos, 1 lugar y 1 pago
*/

class Alimento {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

class Platillo {
    constructor(nombre) {
        this.nombre = nombre;
        this.ingredientes = [];
    }

    agregarIngrediente(alimento) {
        this.ingredientes.push(alimento);
    }

    calcularPrecio() {
        return this.ingredientes.reduce((total, alimento) => total + alimento.precio, 0);
    }
}

class Pago {
    constructor(metodo, monto) {
        this.metodo = metodo;
        this.monto = monto;
    }
}

class Lugar {
    constructor(direccion, referencia) {
        this.direccion = direccion;
        this.referencia = referencia;
    }
}

class Compra {
    constructor(usuario) {
        this.usuario = usuario;
        this.fecha = new Date().toISOString();
        this.platillos = [];
        this.alimentos = [];
        this.lugar = null;
        this.pago = null;
    }

    agregarPlatillo(platillo) {
        if (!(platillo instanceof Platillo)) throw new Error("Debe ser un Platillo");
        this.platillos.push(platillo);
    }

    agregarAlimento(alimento) {
        if (!(alimento instanceof Alimento)) throw new Error("Debe ser un Alimento");
        this.alimentos.push(alimento);
    }

    establecerLugar(lugar) {
        if (!(lugar instanceof Lugar)) throw new Error("Debe ser un Lugar");
        this.lugar = lugar;
    }

    realizarPago(pago) {
        if (!(pago instanceof Pago)) throw new Error("Debe ser un Pago");

        const totalCompra = this.calcularTotal();
        if (pago.monto < totalCompra) {
            throw new Error("Monto insuficiente");
        }

        this.pago = pago;
    }

    calcularTotal() {
        const totalPlatillos = this.platillos.reduce((sum, p) => sum + p.calcularPrecio(), 0);
        const totalAlimentos = this.alimentos.reduce((sum, a) => sum + a.precio, 0);
        return totalPlatillos + totalAlimentos;
    }

    mostrarDetalle() {
        console.log("=== Detalle de Compra ===");
        console.log(`Usuario: ${this.usuario}`);
        console.log(`Fecha: ${this.fecha}`);

        console.log("\nPlatillos:");
        this.platillos.forEach((platillo, index) => {
            console.log(`${index + 1}. ${platillo.nombre} - $${platillo.calcularPrecio()}`);
        });

        console.log("\nAlimentos adicionales:");
        this.alimentos.forEach((alimento, index) => {
            console.log(`${index + 1}. ${alimento.nombre} - $${alimento.precio}`);
        });

        console.log(`\nTotal: $${this.calcularTotal()}`);
        console.log(`Lugar: ${this.lugar?.direccion}`);
        console.log(`Pago: ${this.pago?.metodo} - $${this.pago?.monto}`);
    }
}