import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { InvoicesService } from '../invoices/invoices.service';
import { Observable } from 'rxjs';
import { Pay } from '../detail-client/add-pay/pay-model';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, map, tap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pdf-invoices',
  templateUrl: './pdf-invoices.component.html',
  styleUrls: ['./pdf-invoices.component.css']
})
export class PdfInvoicesComponent implements OnInit {
  invoices: MatTableDataSource<Pay>;
  quarter: number;
  year: number
  displayedColumns: string[] = ["idInvoice", "dateInvoice", "quantity"];
  @ViewChild('content') content: ElementRef;
  constructor(private servicInvoice: InvoicesService, private detectorRef: ChangeDetectorRef

  ) {
    this.year;
    this.quarter;
  }
  ngOnInit() {
  }
  getInvoices(month: number, year: number) {
    return this.servicInvoice.getInvoicesOneQuarter(month, year)
      .pipe(
        map(data => new MatTableDataSource(data)),
        tap(invoices => this.invoices = invoices)
      );
  }
  generarPDF() {
    this.getInvoices(this.quarter, this.year).subscribe(invoices => {
      this.detectorRef.detectChanges();
      const doc = new jsPDF()
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
    )
  };
  parse(date: Date) {
    return date.getFullYear()
  }
}