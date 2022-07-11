import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsRoutingModule } from './products.routing';
import { NewProductComponent } from './new-product/new-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AllProductsComponent, NewProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
