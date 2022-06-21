import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrdersRoutingModule } from './orders.routing';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule],
  declarations: [AllOrdersComponent],
})
export class OrdersModule {}
