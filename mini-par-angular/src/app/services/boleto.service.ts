import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShowMessageService } from './show-message.service';
import { Boleto } from '../models/boleto';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  baseUrl = "api/resources/boletos";

  constructor(
    private http: HttpClient,
    private showMessageService: ShowMessageService) { }

  create(boleto: Boleto): Observable<Boleto> {
    return this.http.post<Boleto>(this.baseUrl, boleto).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  read(): Observable<Boleto[]> {
    return this.http.get<Boleto[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readById(id: number): Observable<Boleto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Boleto>(url).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readByParams(clienteId, pagadorId):Observable<Boleto[]>{
    const url = `${this.baseUrl}/consulta`;
    let params:HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);
    params = params.append('pagadorId', pagadorId);

    return this.http.get<Boleto[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e)=> this.showMessageService.errorHandler(e))
    );
  }

  update(boleto: Boleto): Observable<Boleto> {
    return this.http.put<Boleto>(this.baseUrl, boleto).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  delete(id: number): Observable<Boleto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Boleto>(url).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }
}
