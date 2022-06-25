import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsRoutingModule } from './products.routing';

@NgModule({
  declarations: [AllProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
