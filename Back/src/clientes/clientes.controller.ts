import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Clients } from './clientes.entity';
import { Invoice } from 'src/invoice/invoice.entity';
import { Observable } from 'rxjs';
import { Pass } from 'src/pass/pass.entity';
import { getDefaultWatermarks } from 'istanbul-lib-report';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/clientes')
export class ClientesController {

  constructor(private readonly clientesService: ClientesService) { }
  @Get()
  getAll() {
    return this.clientesService.getAll();
  }

  /**
   * 
   * @param client 
   */
  @Post()
  save(@Body() client: Clients) {
    return this.clientesService.save(client);
  }

  @Get('limitDefaulters')
  getLimitDefaulters() {
    return this.clientesService.getLimitDefaulters()
  }

  @Get('defaulters')
  getDefaulters() {
    return this.clientesService.getDefaulters()
  }


  @Get('actives')
  getInactives() {
    return this.clientesService.getActives()
  }

  /**
   * 
   * @param id 
   */
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Clients> {
    return this.clientesService.getOne(id);
  }


  /**
   * 
   * @param id 
   */
  @Get(':id/invoices')
  getInvoices(@Param('id', ParseIntPipe) id: number): Promise<Invoice[]> {
    return this.clientesService.getInvoices(id);
  }


  /**
   * 
   * @param id 
   * @param invoice 
   */
  @Post(':id/invoices')
  saveInvoice(
    @Param('id', ParseIntPipe) id: number,
    @Body() invoice: Invoice,
  ): Promise<Invoice> {
    return this.clientesService.saveInvoice(id, invoice);
  }

  /**
   * 
   * @param id 
   * @param client 
   */

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() client: Clients,
  ): Promise<any> {
    return this.clientesService.updateClient(client);
  }
}
