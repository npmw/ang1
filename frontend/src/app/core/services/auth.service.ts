import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token';
  private readonly isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(username: string, password: string): Observable<boolean> {
    // Simulate login; replace with real API call
    const fakeToken = btoa(`${username}:${password}`);
    localStorage.setItem(this.tokenKey, fakeToken);
    this.isAuthenticatedSubject.next(true);
    return of(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
