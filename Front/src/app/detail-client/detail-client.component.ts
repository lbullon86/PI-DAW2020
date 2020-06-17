import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../clientes/cliente";
import { ClientesService } from "../clientes/clientes.service";
import { MatDialog } from "@angular/material/dialog";
import { AddPayComponent } from "./add-pay/add-pay.component";
import { UpdateClientComponent } from "./update-client/update-client.component";
import { AddAttendanceComponent } from "./add-attendance/add-attendance.component";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { MatTableDataSource } from '@angular/material/table';
import { Pay } from './add-pay/pay-model';

export interface DialogData {
  id: number;

}

@Component({
  selector: "app-detail-client",
  templateUrl: "./detail-client.component.html",
  styleUrls: ["./detail-client.component.css"]
})
export class DetailClientComponent implements OnInit {
  public client: Observable<Client>;
  private idClient: number;
  private nameClient: string;
  invoices: Observable<Pay[]>
  //activatedRoute para pillar la ruta actual, y por tanto los parametros del observable de la misma.
  constructor(
    private route: ActivatedRoute,
    private serviceClient: ClientesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.client = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.idClient = +params.get("id");
        return this.serviceClient.findOne(+params.get("id"));
      })
    );
    this.getInvoices();

    //Pipe una tubería al observable.
    //SwitchMap, pilla lo que viene de la tuberia y ahora eligo el parametro que he mandado y lo pillo.

  }

  addPay(): void {
    let dialogRef = this.dialog.open(AddPayComponent, {
      width: "450px",
      height: "500px",
      data: { id: this.idClient }
    });
    dialogRef.afterClosed().subscribe(() => this.getInvoices()
    )

  }
  updateClient(): void {
    let dialogRef = this.dialog.open(UpdateClientComponent, {
      width: "450px",
      height: "500px",
      data: { id: this.idClient }


    });
    dialogRef.afterClosed().subscribe(clients => this.client = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.idClient = +params.get("id");
        this.nameClient = params.get("nameClient");
        return this.serviceClient.findOne(+params.get("id"));
      })
    ))

  }
  addAttendance(): void {
    let dialogRef = this.dialog.open(AddAttendanceComponent, {
      width: "450px",
      height: "500px",
      data: { id: this.idClient }

    });
    dialogRef.afterClosed().subscribe()

  }

  getStatus(status) {
    if (status) {
      return "Activo"
    } else {
      return "Inactivo"
    }

  }
  getInvoices() {
    this.invoices = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.idClient = +params.get("id");
        return this.serviceClient
          .getInvoicesOneClient(this.idClient)
      })
    );

  }
}
