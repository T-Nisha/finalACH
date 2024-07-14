// contractor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contractor } from '../components/model/contractor';
// Adjust the path if necessary
import { AuthService } from './auth.service';
import { Detail } from '../components/model/detail';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {
  private baseUrl = 'http://localhost:8081/agroch';

  constructor(private http: HttpClient, private authService: AuthService) {}

  createContractor(contractor: Contractor): Observable<Contractor> {
    return this.http.post<Contractor>(`${this.baseUrl}/addContractor`, contractor);
  }

  getAllContractor(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllContractors`);
  }

  getContractorByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getContractorByUsername/${username}`);
  }

  updateContractor(contractor: Contractor): Observable<Contractor> {
    return this.http.put<Contractor>(`${this.baseUrl}/updateContractor/${contractor.id}`, contractor);
  }

  deleteContractor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteContractor/${id}`, { responseType: 'text' });
  }

  searchContractor(id: number): Observable<Contractor> {
    return this.http.get<Contractor>(`${this.baseUrl}/getOneContractor/${id}`);
  }

  getLoggedInUsername(): string | null {
    return this.authService.getLoggedInUsername();
  }

  getDetailsByUsername(username: string): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.baseUrl}/details/contractor/${username}`);
  }

  addDetail(detail: Detail): Observable<Detail> {
    return this.http.post<Detail>(`${this.baseUrl}/details`, detail);
  }

  getAllDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.baseUrl}/details`);
  }

  deleteDetail(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/details/${id}`);
  }

  logout(): void {
    this.authService.logout();
  }
}
