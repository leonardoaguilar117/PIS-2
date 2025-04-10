class OAuthGoogle {
    autenticar(credenciales) {
        console.log("🔑 Autenticando con Google...");
        return { token: `google-${Math.random().toString(36).substr(2, 9)}`, usuario: credenciales.email };
    }
}