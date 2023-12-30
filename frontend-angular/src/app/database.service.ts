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
}