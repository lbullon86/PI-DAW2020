import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './clientes.entity';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { PassModule } from 'src/pass/pass.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [ClientesController],
  imports:[TypeOrmModule.forFeature([Clients]), InvoiceModule, PassModule, PassportModule.register({defaultStrategy:'jwt'})],
  providers: [ClientesService],

})
export class ClientesModule {}
