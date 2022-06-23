import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  {
    path: '',
    component: AllOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
