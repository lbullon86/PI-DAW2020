import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { CompanyModule} from './company/company.module';
import { MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ClientesModule } from './clientes/clientes.module';
import { DetailClientModule } from './detail-client/detail-client.module';
import { DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout' ;
import { ContabilidadModule } from './contabilidad/contabilidad.module';
import { HeaderComponent } from './header/header.component';
import { ScheduleModule } from './schedule/schedule.module';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { UsersModule } from './users/users.module';
import { PricesModule } from './prices/prices.module';
import {InfoModule} from './info/info.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from  './core/http/token-interceptor.service';
import { ContainerModule } from './container/container.module';
import { UpdateScheduleModule } from './schedule/update-schedule/update-schedule.module';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule, 
    ContainerModule,
    CompanyModule,
    MatTableModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatNativeDateModule,
    ClientesModule,
    ContabilidadModule,
    DetailClientModule,
    FlexLayoutModule,
    ScheduleModule,
    UsersModule,
    PricesModule,
    MatFormFieldModule,
    InfoModule,
    UpdateScheduleModule
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
