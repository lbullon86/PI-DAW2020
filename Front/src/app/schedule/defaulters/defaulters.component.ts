import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Client } from 'src/app/clientes/cliente';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-defaulters',
  templateUrl: './defaulters.component.html',
  styleUrls: ['./defaulters.component.css']
})
export class DefaultersComponent implements OnInit {
  clientes:Array<Client>;
  clientesObservable:Observable<Client[]>

  constructor(private clientService:ClientesService) { 
    this.clientes = []

  }

  ngOnInit() {
    this.getDefaulter()
    
  }

  getDefaulter(){
    this.clientesObservable = this.clientService.getDefaulters();
  

  }
}
