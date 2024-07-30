import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  loginUrl: 'https://login.microsoftonline.com/31853725-2f54-461c-b43d-4e4d45a74f53/oauth2/v2.0/authorize',
  redirectUri: window.location.origin,
  clientId: '397abd88-f10f-44c6-83aa-47451b8f2fb4',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
};
