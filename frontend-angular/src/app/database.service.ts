import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  // GET "/api/package"
  public getPackages(): Observable<any[]> {
    const url = `${this.apiUrl}/api/package`;
    return this.httpClient.get<any[]>(url);
  }

  // GET "/api/package/:id"
  public getPackageById(id: string): Observable<any> {
    const url = `${this.apiUrl}/api/package/${id}`;
    return this.httpClient.get<any>(url);
  }

  // GET "/api/package/:id/fact"
  public getFactsByPackageId(id: string): Observable<any[]> {
    const url = `${this.apiUrl}/api/package/${id}/fact`;
    return this.httpClient.get<any[]>(url);
  }
}