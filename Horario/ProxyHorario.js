class ProxyHorario extends CRUD_Horario {
    constructor(horarioReal) {
        super();
        this.horarioReal = horarioReal;
        this.diasValidos = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    }

    crear(horario) {
        if (!this.diasValidos.includes(horario.dia)) {
            console.log("Día inválido: ${horario.dia} ");
            return false;
        }

        // Validación formato hora
        const regexHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!regexHora.test(horario.apertura) || !regexHora.test(horario.cierre)) {
            console.log("❌ Formato de hora inválido. Use HH:MM (24h)");
            return false;
        }

        // Validación apertura < cierre
        if (this.horaAMinutos(horario.apertura) >= this.horaAMinutos(horario.cierre)) {
            console.log("❌ Hora de apertura debe ser anterior al cierre");
            return false;
        }

        console.log("Cambios realizados");
        return this.horarioReal.crear(horario);
    }

    horaAMinutos(hora) {
        const [h, m] = hora.split(":").map(Number);
        return h * 60 + m;
    }

    leer(id) { return this.horarioReal.leer(id); }
    actualizar(id, datos) { return this.horarioReal.actualizar(id, datos); }
    eliminar(id) { return this.horarioReal.eliminar(id); }
}