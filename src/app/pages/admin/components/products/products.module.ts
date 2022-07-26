import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsRoutingModule } from './products.routing';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './components/new-product/new-product.component';
import { DeleteDirective } from 'src/app/core/directives/delete.directive';
@NgModule({
  declarations: [AllProductsComponent, NewProductComponent, DeleteDirective],
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
