import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from './cliente';
import { Pay } from '../detail-client/add-pay/pay-model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public urlClient: string;

  constructor(private http: HttpClient) {
    this.urlClient = environment.baseUrl + '/clientes';

  }
  findAll(): Observable<Object[]> {
    return this.http.get(this.urlClient) as Observable<Client[]>

  }

  getInactives(): Observable<Object[]> {
    return this.http.get(`${this.urlClient}/actives` ) as Observable<Client[]>


  }
  /**
   * 
   * @param client 
   */
  save(client: Client): Observable<Object> {
    return this.http.post<Client>(this.urlClient, client);
  }
  /**
   * 
   * @param id 
   */
  findOne(id: number): Observable<Client> {
    return this.http.get(`${this.urlClient}/${id}`) as Observable<Client>;
  }

  /**
   * 
   * @param id 
   */
  getInvoicesOneClient(id: number): Observable<Pay[]> {
    return this.http.get(`${this.urlClient}/${id}/invoices`) as Observable<Pay[]>;
  }

  /**
   * 
   * @param client 
   */
  updateClient(client: Client): Observable<Client> {

    return this.http.put(`${this.urlClient}/${client.idClient}`, client) as Observable<Client>;

  }

  getLimitDefaulters(): Observable<Client[]> {
    return this.http.get(`${this.urlClient}/limitDefaulters`) as Observable<Client[]>
  }

  getDefaulters(): Observable<Client[]> {
    return this.http.get(`${this.urlClient}/defaulters`) as Observable<Client[]>
  }

}

