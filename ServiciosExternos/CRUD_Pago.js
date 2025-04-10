class CRUD_Pago extends AdaptadorGeneradorQR {
    generarQRpago(monto) {
        return this.crear({ codigo: `PAGO-${monto}` });
    }
}