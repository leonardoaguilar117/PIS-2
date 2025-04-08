class ReservaEspacios {
    constructor(proxyEspacios) {
        this.proxyEspacios = proxyEspacios;
    }

    reservar(idEspacio, usuario) {
        const espacio = this.proxyEspacios.leer(idEspacio);
        if (!espacio || espacio.reservado) {
            console.log(`⚠️ No se puede reservar el espacio ${idEspacio}.`);
            return false;
        }
        this.proxyEspacios.actualizar(idEspacio, { reservado: true, usuario });
        console.log(`✅ ${usuario} reservó el espacio ${idEspacio}.`);
        return true;
    }

    reservarConHorario(idEspacio, usuario, horario) {
        if (!this.proxyEspacios.estaDisponible(idEspacio, horario)) {
            console.log(`Horario ${horario} no disponible para ${idEspacio}.`);
            return false;
        }
        this.proxyEspacios.espacioReal.asignarHorario(idEspacio, horario);
        return this.reservar(idEspacio, usuario);
    }

    cancelarReserva(idEspacio) {
        const espacio = this.proxyEspacios.leer(idEspacio);
        if (espacio && espacio.reservado) {
            this.proxyEspacios.actualizar(idEspacio, { reservado: false, usuario: null });
            console.log(`❌ Reserva del espacio ${idEspacio} cancelada.`);
            return true;
        }
        console.log("⚠️ Espacio no estaba reservado.");
        return false;
    }
}
