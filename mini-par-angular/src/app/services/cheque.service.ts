import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShowMessageService } from './show-message.service';
import { Cheque } from '../models/cheque';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  baseUrl = "api/resources/cheques";

  constructor(
    private http: HttpClient,
    private showMessageService: ShowMessageService) { }

  create(cheque: Cheque): Observable<Cheque> {
    return this.http.post<Cheque>(this.baseUrl, cheque).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  read(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readById(id: number): Observable<Cheque> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cheque>(url).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readByParam(pagadorId, clienteId): Observable<Cheque[]> {
    const url = `${this.baseUrl}/consulta`;
    let params:HttpParams = new HttpParams();
    params = params.append('pagadorId', pagadorId);
    params = params.append('clienteId', clienteId);
    
    return this.http.get<Cheque[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  update(cheque: Cheque): Observable<Cheque> {
    return this.http.put<Cheque>(this.baseUrl, cheque).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  delete(id: number): Observable<Cheque> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cheque>(url).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }
}
