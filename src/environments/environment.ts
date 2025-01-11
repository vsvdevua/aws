export const environment = {
production: true,
apiURL: 'https://apimocha.com/vsvdev/orders',
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
