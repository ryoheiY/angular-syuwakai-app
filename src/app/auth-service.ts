import {inject, Injectable, OnInit} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService{
  private oauthService: OAuthService = inject(OAuthService);

  constructor() {
    this.oauthService.events.subscribe({
      next: event => {
        console.log(event, this.isExpired());

      }
    });
  }

  authConfig: AuthConfig = {
    issuer: 'https://login.microsoftonline.com/31853725-2f54-461c-b43d-4e4d45a74f53/v2.0',
    redirectUri: window.location.origin,
    clientId: 'ceea16b3-c6e8-4273-8d58-d4e8a94c19ea',
    responseType: 'code',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: true
  };

  initAuth() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.initAuth();
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.oauthService.hasValidIdToken());
  }

  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  private isExpired(){
    console.log(convertMsToJST(this.oauthService.getIdTokenExpiration()));
    return this.oauthService.getIdTokenExpiration();
  }
}

function convertMsToJST(ms: number): string {
  // 日本標準時 (JST) タイムゾーンのオフセットはUTC+9
  const JST_OFFSET = 9 * 60 * 60 * 1000; // ミリ秒に変換

  // タイムスタンプにオフセットを加算して、JSTの日時を計算
  const date = new Date(ms + JST_OFFSET);

  // 日時をフォーマットする
  const year = date.getUTCFullYear();
  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
  const day = ('0' + date.getUTCDate()).slice(-2);
  const hours = ('0' + date.getUTCHours()).slice(-2);
  const minutes = ('0' + date.getUTCMinutes()).slice(-2);
  const seconds = ('0' + date.getUTCSeconds()).slice(-2);

  // フォーマットされた日時を返す
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
