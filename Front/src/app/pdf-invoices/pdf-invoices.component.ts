import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { InvoicesService } from '../invoices/invoices.service';
import { Observable } from 'rxjs';
import { Pay } from '../detail-client/add-pay/pay-model';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, map } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-invoices',
  templateUrl: './pdf-invoices.component.html',
  styleUrls: ['./pdf-invoices.component.css']
})
export class PdfInvoicesComponent implements OnInit {
  invoicesObservable: Observable<Pay[]>;
  invoices: Observable<MatTableDataSource<Pay>>;
  invoicesData: MatTableDataSource<any>;
  quarter:number;
  year:number

  displayedColumns: string[] = ["idInvoice","dateInvoice", "quantity"];

  @ViewChild('content') content: ElementRef;

  constructor(private servicInvoice: InvoicesService,
    private route: ActivatedRoute,
  ) { 
    this.year;
    this.quarter;
  }

  async ngOnInit() {
    //await this.getInvoices(this.quarter,this.year);

  }

  getInvoices(month:number,year:number) {
    this.invoices = this.servicInvoice.
      getInvoicesOneQuarter(month, year)
      .pipe(map(data => this.invoicesData = new MatTableDataSource(data)));

  }

 async  generarPDF() {
   await this.getInvoices(this.quarter, this.year);
    let doc = new jsPDF()
    let specialElement = {
      '#editor': function (element, render) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElement
    });

    doc.save('facturas.pdf')
  }

  parse(date:Date){
    return date.getFullYear()
  }
}
