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

  // PUT "/api/package/:id"
  public updatePackageById(id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/api/package/${id}`;
    return this.httpClient.put<any>(url, data);
  }

  // GET "/api/package/:id/fact"
  public getFactsByPackageId(id: string): Observable<any[]> {
    const url = `${this.apiUrl}/api/package/${id}/fact`;
    return this.httpClient.get<any[]>(url);
  }

  // GET "/api/fact/:id"
  public getFactById(id: string): Observable<any> {
    const url = `${this.apiUrl}/api/fact/${id}`;
    return this.httpClient.get<any>(url);
  }

  // PUT "/api/fact/:id"
  public updateFactById(id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/api/fact/${id}`;
    return this.httpClient.put<any>(url, data);
  }

  // POST "/api/fact"
  public createFact(data: any): Observable<any> {
    const url = `${this.apiUrl}/api/fact`;
    return this.httpClient.post<any>(url, data);
  }

  // DELETE "/api/fact/:id"
  public deleteFactById(id: string): Observable<any> {
    const url = `${this.apiUrl}/api/fact/${id}`;
    return this.httpClient.delete<any>(url);
  }

  // GET "/api/userlearningfact"
  public getUserLearningFacts(): Observable<any[]> {
    const url = `${this.apiUrl}/api/userlearningfact`;
    return this.httpClient.get<any[]>(url);
  }

  // GET "/api/userlearningpackage"
  public getUserLearningPackages(): Observable<any[]> {
    const url = `${this.apiUrl}/api/userlearningpackage`;
    return this.httpClient.get<any[]>(url);
  }

    // GET "/api/courses/titles"
  public getCourseTitles(): Observable<any[]> {
    const url = `${this.apiUrl}/api/courses/titles`;
    return this.httpClient.get<any[]>(url);
  }

  // GET "/api/package/:package_id/details"
  public getPackageDetailsById(packageId: string): Observable<any> {
    const url = `${this.apiUrl}/api/package/${packageId}/details`;
    return this.httpClient.get<any>(url);
  }
}
