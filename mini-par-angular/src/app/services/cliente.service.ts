import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { map, catchError } from 'rxjs/operators';
import { ShowMessageService } from './show-message.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "api/resources/clientes";

  constructor(
    private http:HttpClient,
    private showMessageService:ShowMessageService) { }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  read():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readById(id:number):Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readByParam(cpf:string, nome:string):Observable<Cliente[]>{
    const url = `${this.baseUrl}/consulta`;
    let params: HttpParams = new HttpParams();
    params = params.append('cpf', cpf);
    params = params.append('nome', nome);

    return this.http.get<Cliente[]>(url, { params }).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  update(cliente:Cliente):Observable<Cliente>{
    console.log(cliente);
    return this.http.put<Cliente>(this.baseUrl, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  delete(id:number):Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }
}