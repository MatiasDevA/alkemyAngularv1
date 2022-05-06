import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';


const routes: Routes = [
{path: '', component:EncabezadoComponent},
{path: 'menu', component:MenuPrincipalComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
