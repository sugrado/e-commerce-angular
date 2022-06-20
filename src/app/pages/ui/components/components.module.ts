import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [CommonModule, BasketModule, ProductsModule],
  declarations: [],
})
export class ComponentsModule {}
