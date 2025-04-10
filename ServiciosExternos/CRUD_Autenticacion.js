class CRUD_Autenticacion extends AdaptadorOAuthGoogle {
    validarToken(token) {
        return super.leer(token);
    }
}