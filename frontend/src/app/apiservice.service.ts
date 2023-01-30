import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}

  //connect front to back
  apiUrl = 'http://localhost:3000';

  getAllCustumers(): Observable<any> {
    return this._http.get(`${this.apiUrl}/custumers`);
  }

  getAllProfessionals(): Observable<any> {
    return this._http.get(`${this.apiUrl}/professionals`);
  }

  getProfessionalBook(value: string): Observable<any> {
    return this._http.get(`${this.apiUrl}/professionals/sessions/${value}`);
  }

  getCustumerScheduledData(value: string): Observable<any> {
    return this._http.get(`${this.apiUrl}/custumers/sessions/${value}`);
  }

  createProfessionalBook(data: any, slots: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/book`, data);
  }

  assignProfessionalBook(
    slotId: any,
    idCustumer: any,
    idProfessional: any,
    beforeTime: any,
    afterTime: any
  ): Observable<any> {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { slotId, idCustumer, idProfessional, beforeTime, afterTime },
    };
    return this._http.put(`${this.apiUrl}/book`, '', httpOptions);
  }

  deleteProfessionalBook(id: any): Observable<any> {
    return this._http.delete(`${this.apiUrl}/book/${id}`);
  }

  deleteCustumerAssignBook(
    id: any,
    id_prof_book: any,
    idProfessional: string,
    beforeTime: string,
    afterTime: string
  ): Observable<any> {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { id_prof_book, idProfessional, beforeTime, afterTime },
    };
    return this._http.delete(`${this.apiUrl}/book/assign/${id}`, httpOptions);
  }
}
