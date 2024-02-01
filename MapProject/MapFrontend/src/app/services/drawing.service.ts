import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  private apiUrl = 'http://localhost:5000/api/drawing';

  private drawingSubject = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  addDrawing(drawing: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, drawing);
  }

  queryDrawings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-all`);
  }

  notifyDrawingAdded() {
    this.queryDrawings().subscribe(drawings => {
      this.drawingSubject.next(drawings);
    });
  }
}