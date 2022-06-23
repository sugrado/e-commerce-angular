import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from 'src/app/pages/ui/components/products/all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
