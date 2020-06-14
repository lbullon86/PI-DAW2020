import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';

import { Invoicing } from './invoicing-model';



@Controller('api/invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) { }



  /**
   * Save one invoice
   * @param invoice 
   * */
  @Post()
  save(@Body() invoice: Invoice) {
    return this.invoiceService.save(invoice);
  }

  /**
   * Get all invoicing of company
   * @returns Invoicing , all invoicing of company
   */
  @Get('/invoicing')
  getFacturacion() {
    return this.invoiceService.getInvoicing()
  }

  /**
   * Get invoicing of one date
   * @param date 
   * @returns Invocing of given date
   */
  @Get('/invoicingDay/:date')
  getInvoicingOneDay(@Param('date') date: Date) {
    return this.invoiceService.getInvoicingOneDay(date);
  }

  /**
   * Get invoicing of between two dates
   * @param from start date
   * @param to finish date
   * @returns Invoicing of one period
   */
  @Get('/invoicingPeriod')
  getInvoicingOnePeriod(@Query('from') from: Date, @Query('to') to: Date) {
    const result = this.invoiceService.getInvoicingOnePeriod(from, to);
    return result;
  }

  @Get('/default')
  getDefaulters() {
    return this.invoiceService.getDefaulters()
  }

  /**
   * Get all passes of company
   * @returns Pass[]
   */
  @Get('/passes')
  getPasses() {
    return this.invoiceService.getPasses();
  }

  /**
   * Get invoicing by quarters
   * @returns Invoicing[]
   */
  @Get('/invoicingQuarter')
  getInvoicingQuarte(): Promise<Invoicing[]> {
    return this.invoiceService.getInvoicingQuarter();
  }

  /**
  * Get invoicing by quarters by class
  * @param year 
  * @returns Invoicing[] Invoicing by class by quarters of given year
  */
  @Get('/invoicingClass/:year')
  getInvoicingClass(@Param('year', ParseIntPipe) year: number) {
    return this.invoiceService.getInvoicingOneYearByClass(year);
  }

  /**
   * Get all invoicing
   * @returns Invoicing[]
   */
  @Get()
  getAll() {
    return this.invoiceService.getAll();
  }

  /**
   * Get invoices of one client
   * @param id given id of one client
   * @returns Invoices[] of given client
   */
  @Get(':id/invoices')
  getInvoicesOneClient(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.getInvoicesOneClient(id);
  }
  /**
   * Get Invoicing by class all quarters of given year
   * @param year given year
   * @returns InvoicingClass[] 
   */
  @Get("quarterClass/:year")
  getInvoicingOneYearByClassQuarter(@Param('year', ParseIntPipe) year: number) {
    return this.invoiceService.getInvoicingOneYearByClassQuarter(year)
  }
  /**
   * Get Invoicing of one quarter by class
   * @param year given year
   * @param from given start
   * @param to   given finish
   * @returns InvoicingClass
   */
  @Get("oneQuarterAllClass/:year")
  getInvoicingOneQuarterAllClass(@Param("year", ParseIntPipe) year: number, @Query('from') from: number, @Query('to') to: number) {
    return this.invoiceService.getInvoicingOneQuarterByAllClass(year, from, to)

  }
  /**
   * Get Invoicing of one quarter by paymentMethod
   * @param year given year
   * @param from given start
   * @param to   given finish
   * @returns InvoicingClass
   */
  @Get("oneQuarterAllMethodPayment/:year")
  getInvoicingOneQuarterAllMethodPayment(@Param("year", ParseIntPipe) year: number, @Query('from') from: number, @Query('to') to: number) {
    return this.invoiceService.getInvoicingOneQuarterByAllPaymentMethod(year, from, to)
  }

  /**
   * Get Invoicing of all moths of one month by class
   * @param year given year
   * @param month given month
   * @returns InvoicingClass
   */
  @Get("monthsClass/:year/:month")
  getInvoicingMonthsrByClassQuarter(@Param('year', ParseIntPipe) year: number, @Param('month', ParseIntPipe) month: number) {
    return this.invoiceService.getInvoicingMonthByAllClass(year, month)
  }

  /**
   * Get Invoicing of all months by class
   * @param year 
   * @returns InvocingClass[]
   */
  @Get("allMonths/:year")
  getInvoicingMonthsByClass(@Param('year', ParseIntPipe) year: number) {
    return this.invoiceService.getInvoicingMonthsByClass(year)
  };


  /**
   * Get invoicing of one month by one paymentMethod
   * @param year 
   * @param month 
   * @param method 
   * @returns Invoicing
   */
  @Get("oneMonthOneMethod/:year/:month/:method")
  getInvoicingOneMonthByOnePaymentMethod(@Param('year', ParseIntPipe) year: number,
    @Param("month", ParseIntPipe) month: number, @Param("method", ParseIntPipe) method: number): Promise<Invoicing> {
    return this.invoiceService.getInvoicingMonthByOnePaymentMethod(year, month, method)
  }
  /**
   * Get Invoicing of one month by all payment Method
   * @param year 
   * @param month 
   * @returns Invoicing
   */
  @Get("oneMonthAllMethods/:year/:month")
  getInvoicingOneMonthByPaymentMethod(@Param('year', ParseIntPipe) year: number,
    @Param("month", ParseIntPipe) month: number) {
    return this.invoiceService.getInvoicingOneMonthAllPaymentMethod(year, month)
  }

  /**
   * Get Invoicing of all months by payment method
   * @param year 
   * @returns InvocingClass[]
   */
  @Get("monthsMethod/:year")
  getInvoicingMonthsByPaymentMethod(@Param('year', ParseIntPipe) year: number) {
    return this.invoiceService.getInvoicingMonthsByPaymentMethod(year)
  }
 /**
   * Get sum Invoicing of all months by payment method
   * @param year 
   * @returns Invocing
   */  
  @Get('invoicingYearByMethodPayment/:year')
  getInvoicingYearByPaymentMethod(@Param('year', ParseIntPipe) year: number) {
    return this.invoiceService.getInvoicingOneYearByMethodPayment(year);
  }



}
