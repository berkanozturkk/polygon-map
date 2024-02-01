import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryDrawingService {
  private apiUrl = 'http://localhost:5000/api/drawing';

  constructor(private http: HttpClient) { }

  queryDrawings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all`);
  }
}