import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { WebAuth } from 'auth0-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private webAuth: WebAuth;
  private expiresAt: number;
  accessToken: string;
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  loggingIn: boolean;
  constructor(private router: Router) {

    this.webAuth = new WebAuth({
      domain: environment.auth.domain,
      clientID: environment.auth.clientID,
      responseType: 'token',
      redirectUri: environment.auth.redirect,
      audience: environment.auth.audience,
      scope: environment.auth.scope
    });

    // If app auth token is not expired, request new token
    if (JSON.parse(localStorage.getItem('expires_at')) > Date.now()) {
      this.renewToken();
    }
  }
  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }
  login() {
    // Auth0 authorize request
    this.webAuth.authorize();
  }
  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.webAuth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this._setSession(authResult);
      } else if (err) {
        console.error(`Error authenticating: ${err.error}`);
      }
      this.router.navigate(['/']);
    });
  }

  private _setSession(authResult) {
    this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
    // Store expiration in local storage to access in constructor
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    this.accessToken = authResult.accessToken;
    // Update login status in loggedIn$ stream
    this.setLoggedIn(true);
    this.loggingIn = false;
  }
  private _clearExpiration() {
    // Remove token expiration from localStorage
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login'])
  }
  logout() {
    // Remove data from localStorage
    this._clearExpiration();
    // End Auth0 authentication session
    this.webAuth.logout({
      clientID: environment.auth.clientID,
      returnTo: 'http://localhost:4200'
    });
  }
  get tokenValid(): boolean {
    // Check if current time is past access token's expiration
    return Date.now() < JSON.parse(localStorage.getItem('expires_at'));
  }
  renewToken() {
    // Check for valid Auth0 session
    this.webAuth.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this._setSession(authResult);
      } else {
        this._clearExpiration();
      }
    });
  }

  checkSession(): Promise<Boolean> {
    return new Promise((resolve, reject) => {
		this.webAuth.checkSession({}, (err, authResult) => {
      		if (authResult && authResult.accessToken) {
        		this._setSession(authResult);
        		resolve(true);
      		} else {
        		resolve(false);
      		}
    	});
	});
  }
}

