import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../info/company-model';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public urlUser:string;

  constructor(private http:HttpClient){ 
    this.urlUser = environment.baseUrl+  '/company';

  }
  findAll():Observable<Company>{
    return this.http.get(this.urlUser) as Observable <Company>

  }


  save(company:Company):Observable<Object>{
    return this.http.post<Company>(this.urlUser,company); 
  }

}
