export class InvoicingClass {
  sum:number;
  TB1:number;
  TB2:number;    
  MAT1:number;
  MAT2:number;
  R1:number;
  R2:number;
  B8:number;
  B16:number;
  month:number;

  constructor(value: any = {}) {
    this.TB1 = value.TB1 || 0;
    this.TB2 = value.TB2 || 0;
    this.MAT1 = value.MAT1 || 0;
    this.MAT2 = value.MAT2 || 0;
    this.R1 = value.R1 || 0;
    this.R2 = value.R2 || 0;
    this.B8 = value.B8 || 0;
    this.B16 = value.B16 || 0;
    this.month= value.month || 0;

  }
}
