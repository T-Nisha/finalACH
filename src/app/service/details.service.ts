// details.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../components/model/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = 'http://localhost:8081/agroch';

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.apiUrl}/getAllDetails`);
  }

  saveDetails(details: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}`, details);
  }

  deleteDetail(id: number): Observable<any> {
    const url = `${this.apiUrl}/details/${id}`;
    return this.http.delete(url);
  }
}
