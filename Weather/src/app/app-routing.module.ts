import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BurbankComponent} from './burbank/burbank.component'
import {ChicagoComponent} from './chicago/chicago.component'
import {SeattleComponent} from './seattle/seattle.component'
import {DallasComponent} from './dallas/dallas.component'
import {SanJoseComponent} from './san-jose/san-jose.component'
import {WdcComponent} from './wdc/wdc.component'

const routes: Routes = [
  {
    path: '',
    component: ChicagoComponent,
    pathMatch: 'full'
  },
  {
    path: 'burbank',
    component: BurbankComponent
  },
  {
    path: 'chicago',
    component: ChicagoComponent
  },
  {
    path: 'seattle',
    component: SeattleComponent
  },
  {
    path: 'dallas',
    component: DallasComponent
  },
  {
    path: 'san-jose',
    component: SanJoseComponent
  },
  {
    path: 'washington-dc',
    component: WdcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);
