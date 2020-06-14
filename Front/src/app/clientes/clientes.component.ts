import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesService } from './clientes.service';
import { MatTableDataSource } from '@angular/material/table';
import { map, switchMap } from 'rxjs/operators';
import { Client } from './cliente';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InsertClientComponent } from './insert-client/insert-client.component';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],

})
export class ClientesComponent implements OnInit {
  clients: Observable<MatTableDataSource<any>>;
  clientsData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nameClient', 'surnameClient'];
  public client: Client;
  flag: number;
  active: Boolean;
  pendientes: Boolean;
  


  constructor(private clientService: ClientesService, public dialog: MatDialog,private route: ActivatedRoute) {
    this.client = new Client();
    this.client.activeClient = false;
    this.active = false;
    this.clients = this.clientService.findAll().pipe(map(data => this.clientsData = new MatTableDataSource(data)));
    this.pendientes= false;
    this.route.queryParams.subscribe(params => {
      this.pendientes = params.active;
    })
  }

  ngOnInit() {
    this.filter()
  }

  /**
   * 
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientsData.filter = filterValue.trim().toLowerCase();

  }

  filter() {
    if (!this.active && !this.pendientes) {
      this.clients = this.clientService.findAll().pipe(map(data => this.clientsData = new MatTableDataSource(data)))
    }
    else if (this.pendientes && !this.active) {
      this.clients = this.clientService.getDefaulters().pipe(map(data => this.clientsData = new MatTableDataSource(data)));
    }
    else if (this.active && !this.pendientes) {
      this.clients = this.clientService.getInactives().pipe(map(data => this.clientsData = new MatTableDataSource(data)));
    }
    else {
      this.clients = this.clientService.getDefaulters().pipe(map(data => this.clientsData = new MatTableDataSource(data)))
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InsertClientComponent, {
      width: '450px',
      height: '500px'

    })
    dialogRef.afterClosed().subscribe(clientes => this.clients = this.clientService.findAll().pipe(map(data => new MatTableDataSource(data))))
      ;

  }



}