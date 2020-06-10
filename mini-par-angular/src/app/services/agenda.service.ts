import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ShowMessageService } from './show-message.service';
import { Cheque } from '../models/cheque';
import { Boleto } from '../models/boleto';
import { Cartao } from '../models/cartao';
import { TipoRecebivel } from '../models/tipoRecebivel';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  baseUrl = '/api/resources/recebiveis';

  constructor(
    private http: HttpClient,
    private showMessageService: ShowMessageService) { }

  readTipos(): Observable<TipoRecebivel[]> {
    const url = `${this.baseUrl}/tipos`;
    return this.http.get<TipoRecebivel[]>(url).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readCliente(cpf): Observable<Cliente> {
    const url = `${this.baseUrl}/cliente`;
    let params: HttpParams = new HttpParams();
    params = params.append('cpf', cpf);

    return this.http.get<Cliente>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readCheques(clienteId): Observable<Cheque[]> {
    const url = `${this.baseUrl}/cheques`;
    let params: HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);

    return this.http.get<Cheque[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readBoletos(clienteId): Observable<Boleto[]> {
    const url = `${this.baseUrl}/boletos`;
    let params: HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);

    return this.http.get<Boleto[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readCartoes(clienteId): Observable<Cartao[]> {
    const url = `${this.baseUrl}/cartoes`;
    let params: HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);

    return this.http.get<Cartao[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readParamsCheques(clienteId, tipoId, pagadorId): Observable<Cheque[]> {
    const url = `${this.baseUrl}/cheques/consulta`;
    let params: HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);
    params = params.append('tipoId', tipoId);
    params = params.append('pagadorId', pagadorId);

    return this.http.get<Cheque[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readParamsBoletos(clienteId, tipoId, pagadorId): Observable<Boleto[]> {
    const url = `${this.baseUrl}/boletos/consulta`;
    let params: HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);
    params = params.append('tipoId', tipoId);
    params = params.append('pagadorId', pagadorId);

    return this.http.get<Boleto[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readParamsCartoes(clienteId, tipoId, bandeiraId): Observable<Cartao[]> {
    const url = `${this.baseUrl}/cartoes/consulta`;
    let params: HttpParams = new HttpParams();
    params = params.append('clienteId', clienteId);
    params = params.append('tipoId', tipoId);
    params = params.append('bandeiraId', bandeiraId);

    return this.http.get<Cartao[]>(url, { params }).pipe(
      map(obj => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }



}
