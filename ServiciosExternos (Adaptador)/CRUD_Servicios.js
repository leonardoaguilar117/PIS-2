class CRUD_Servicios extends AdaptadorGeneradorQR {
    generarQRservicio(servicio) {
        return this.crear({ codigo: `SERV-${servicio.toUpperCase()}` });
    }
}