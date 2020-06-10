import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Pagador } from '../models/pagador';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ShowMessageService } from './show-message.service';


@Injectable({
  providedIn: 'root'
})
export class PagadorService {

  private readonly baseUrl = '/api/resources/pagadores';

  constructor(
    private http: HttpClient,
    private showMessageService: ShowMessageService) { }

  create(pagador: Pagador): Observable<Pagador> {
    console.log(pagador);
    return this.http.post<Pagador>(this.baseUrl, pagador).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  read(): Observable<Pagador[]> {
    return this.http.get<Pagador[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readById(id: number): Observable<Pagador> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pagador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  readByParam(cpf: string, nome: string): Observable<Pagador[]> {
    const url = `${this.baseUrl}/consulta`
    let params:HttpParams = new HttpParams();
    params = params.append('cpf', cpf);
    params = params.append('nome', nome);

    return this.http.get<Pagador[]>(url, { params }).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  update(pagador: Pagador): Observable<Pagador> {
    //const url = `${this.baseUrl}/${pagador.id}`;
    return this.http.put<Pagador>(this.baseUrl, pagador).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }

  delete(id: number): Observable<Pagador> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Pagador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.showMessageService.errorHandler(e))
    );
  }
}
