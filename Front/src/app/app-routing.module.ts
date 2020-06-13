import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContabilidadComponent } from '../app/contabilidad/contabilidad.component';
import { ClientesComponent } from '../app/clientes/clientes.component';
import { CompanyComponent } from './company/company.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: ContainerComponent, canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'contabilidad', component: ContabilidadComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'detailClient/:id', component: DetailClientComponent },
      { path: 'home', component: ScheduleComponent },
    ]
  },
  { path: 'login', component:LoginComponent},
  { path: 'callback', component:CallbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
