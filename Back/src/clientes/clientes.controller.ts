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
   * Save one client
   * @param client 
   * 
   */
  @Post()
  save(@Body() client: Clients) {
    return this.clientesService.save(client);
  }
  /**
   * Get only 10 defaulters
   * @return Clients[] the 10 client defaulters
   */
  @Get('limitDefaulters')
  getLimitDefaulters() {
    return this.clientesService.getLimitDefaulters()
  }
  /**
   * Get all defaulters 
   * @return Clients[] All client defaulters
  
   */
  @Get('defaulters')
  getDefaulters() {
    return this.clientesService.getDefaulters()
  }

  /**
   * Get only active clients
   * @return Client[] All clients are actives
   */
  @Get('actives')
  getInactives() {
    return this.clientesService.getActives()
  }

  /**
   * Get one client by id
   * @param id the id of one client
   * @return Client, the client of the given id
   */
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Clients> {
    return this.clientesService.getOne(id);
  }


  /**
   * Get all invoices from one client by id
   * @param id the id of one client
   * @return Invoice[] the invoices of the given client
   */
  @Get(':id/invoices')
  getInvoices(@Param('id', ParseIntPipe) id: number): Promise<Invoice[]> {
    return this.clientesService.getInvoices(id);
  }


  /**
   * Save one invoice of the client of the given id
   * @param id the id of one client
   * @param invoice Invoice of given client
   */
  @Post(':id/invoices')
  saveInvoice(
    @Param('id', ParseIntPipe) id: number,
    @Body() invoice: Invoice,
  ): Promise<Invoice> {
    return this.clientesService.saveInvoice(id, invoice);
  }

  /**
   * Update one client by id
   * @param id the id of one client
   * @param client the update client
   */

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() client: Clients,
  ): Promise<any> {
    return this.clientesService.updateClient(client);
  }
}
