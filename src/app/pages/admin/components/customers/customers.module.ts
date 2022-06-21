import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { CustomersRoutingModule } from './customers.routing';

@NgModule({
  declarations: [AllCustomersComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
