export const environment = {
production: false,
apiURL:'https://',
config: {
            authority: '',
            redirectUrl: 'http://localhost:4200/home',  //window.location.origin,
            postLogoutRedirectUri: 'http://localhost:4200/home', //window.location.origin,
            clientId: '',
            scope: 'email openid phone',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,

}
};
