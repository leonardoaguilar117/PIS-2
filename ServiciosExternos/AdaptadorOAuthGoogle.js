class AdaptadorOAuthGoogle {
    constructor() {
        this.oauth = new OAuthGoogle();
    }

    crear(datos) {
        return this.oauth.autenticar(datos);
    }

    leer(token) {
        return { valido: !!token.startsWith('google-') };
    }
}
