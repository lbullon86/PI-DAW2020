import { Component, OnInit, Input } from "@angular/core";
import { InvoicesService } from "./invoices.service";
import { Observable } from "rxjs";
import { Pay } from "../detail-client/add-pay/pay-model";
import { ClientesService } from "../clientes/clientes.service";
import { MatTableDataSource } from "@angular/material/table";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Client } from "../clientes/cliente";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.css"]
})
export class InvoicesComponent  {
  invoicesObservable: Observable<Pay[]>;
  @Input()
  invoices: Observable<Pay[]>;
  displayedColumns: string[] = ["dateInvoice", "concept", "quantity"];
  idClient: number;
  client: Observable<Client>;
  get invoicesData(): Observable<MatTableDataSource<Pay>>{
    return this.invoices.pipe(map(data => new MatTableDataSource(data)));
  }
  constructor(
    private datepipe: DatePipe
  ) {

  }

  parseDate(date: Date) {
    return this.datepipe.transform(date, 'dd-MM-yyyy');
  }

 


}
