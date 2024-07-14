import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Farmer } from '../components/model/farmer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private baseUrl = "http://localhost:8081/agroch";

  createFarmer(farmer: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/addFarmer`, farmer);
  }

  getAllFarmers(): Observable<Farmer[]> {
    return this.http.get<Farmer[]>(`${this.baseUrl}/getAllFarmers`)
  }

  searchFarmerByUsername(username: string): Observable<Farmer> {
    return this.http.get<Farmer>(`${this.baseUrl}/getFarmerByUsername/${username}`)
  }

  updateFarmer(farmer: Farmer): Observable<object> {
    return this.http.put(`${this.baseUrl}/updateFarmer/${farmer.id}`, farmer)
  }

  deleteFarmer(id: number): Observable<object> {
    return this.http.delete(`${this.baseUrl}/deleteFarmer/${id}`)
  }
}
