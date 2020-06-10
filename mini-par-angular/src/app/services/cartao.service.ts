import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ShowMessageService } from './show-message.service';
import { Cartao } from '../models/cartao';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Bandeira } from '../models/bandeira';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  baseUrl ="api/resources/cartoes";
  baseUrlBandeiras = "api/resources/cartoes/bandeiras";

  constructor(
    private http:HttpClient,
    private showMessageService:ShowMessageService) { }
   
    readBandeira():Observable<Bandeira[]> {
      return this.http.get<Bandeira[]>(this.baseUrlBandeiras);
    }    
    
    create(cartao:Cartao):Observable<Cartao>{
      return this.http.post<Cartao>(this.baseUrl, cartao).pipe(
        map(obj=>obj),
        catchError((e)=>this.showMessageService.errorHandler(e))
      );
    }

    read():Observable<Cartao[]>{
      return this.http.get<Cartao[]>(this.baseUrl).pipe(
        map(obj=>obj),
        catchError((e)=>this.showMessageService.errorHandler(e))
      );
    }

    readById(id:number):Observable<Cartao>{
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Cartao>(url).pipe(
        map(obj=>obj),
        catchError((e)=>this.showMessageService.errorHandler(e))
      );
    }

    readByParams(clienteId, bandeiraId):Observable<Cartao[]>{
      const url = `${this.baseUrl}/consulta`;
      let params:HttpParams = new HttpParams();
      params = params.append('clienteId', clienteId);
      params = params.append('bandeiraId', bandeiraId);

      return this.http.get<Cartao[]>(url, { params }).pipe(
        map(obj=>obj),
        catchError((e)=>this.showMessageService.errorHandler(e))
      );
    }

    update(cartao:Cartao):Observable<Cartao>{
      return this.http.put<Cartao>(this.baseUrl, cartao).pipe(
        map(obj=>obj),
        catchError((e)=>this.showMessageService.errorHandler(e))
      );
    }

    delete(id:number):Observable<Cartao>{
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Cartao>(url).pipe(
        map(obj=>obj),
        catchError((e)=>this.showMessageService.errorHandler(e))
      );
    }
  }