import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfInvoicesComponent } from './pdf-invoices.component';

describe('PdfInvoicesComponent', () => {
  let component: PdfInvoicesComponent;
  let fixture: ComponentFixture<PdfInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
