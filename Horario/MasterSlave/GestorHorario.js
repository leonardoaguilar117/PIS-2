class GestorHorario {
    constructor() {
        this.historial = new HistorialHorario();
        this.horario = new Horario(this.historial);
    }
}