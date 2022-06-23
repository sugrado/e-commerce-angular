import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllCustomersComponent } from './all-customers/all-customers.component';

const routes: Routes = [
  {
    path: '',
    component: AllCustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
