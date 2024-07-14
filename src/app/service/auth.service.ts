// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:8081/agroch';

  constructor(private http: HttpClient) { }

  private loggedInUsername: string | null = null;

  // loginAdmin(credentials: any): Observable<boolean> {
  //   return this.http.post<boolean>(`${this.baseUrl}/adminLogin`, credentials);
  // }

  loginAdmin(credentials: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/adminLogin`, credentials).pipe(
      tap((loggedIn: boolean) => {
        if (loggedIn) {
          this.loggedInUsername = credentials.username;
          // Check if loggedInUsername is not null before setting localStorage
          if (this.loggedInUsername !== null) {
            localStorage.setItem('loggedInUsername', this.loggedInUsername);
          }
        }
      })
    );
  }
  
  
  // loginFarmer(credentials: any): Observable<boolean> {
  //   return this.http.post<boolean>(`${this.baseUrl}/farmerLogin`, credentials);
  // }

  loginFarmer(credentials: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/farmerLogin`, credentials).pipe(
      tap((loggedIn: boolean) => {
        if (loggedIn) {
          this.loggedInUsername = credentials.username;
          // Check if loggedInUsername is not null before setting localStorage
          if (this.loggedInUsername !== null) {
            localStorage.setItem('loggedInUsername', this.loggedInUsername);
          }
        }
      })
    );
  }
  
  loginContractor(credentials: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/contractorLogin`, credentials).pipe(
      tap((loggedIn: boolean) => {
        if (loggedIn) {
          this.loggedInUsername = credentials.username;
          // Check if loggedInUsername is not null before setting localStorage
          if (this.loggedInUsername !== null) {
            localStorage.setItem('loggedInUsername', this.loggedInUsername);
          }
        }
      })
    );
  }
  // loginContractor(credentials: any): Observable<boolean> {
  //   return this.http.post<boolean>(`${this.baseUrl}/contractorLogin`, credentials).pipe(
  //     tap((loggedIn: boolean) => {
  //       if (loggedIn) {
  //         this.loggedInUsername = credentials.username;
  //         localStorage.setItem('loggedInUsername', this.loggedInUsername);
  //       }
  //     })
  //   );
  // }
  
  loginRetailer(credentials: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/retailerLogin`, credentials);
  }
  
  loginLabour(credentials: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/labourLogin`, credentials);
  }

  getLoggedInUsername(): string | null {
    this.loggedInUsername = localStorage.getItem('loggedInUsername');
    return this.loggedInUsername;
  }

  // Logout method
  logout(): void {
    // Clear user session and local storage
    this.loggedInUsername = null;
    localStorage.removeItem('loggedInUsername');
  }
}
