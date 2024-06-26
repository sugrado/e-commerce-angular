import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket/basket.component';
import { BasketRoutingModule } from './basket.routing';

@NgModule({
  declarations: [BasketComponent],
  imports: [CommonModule, BasketRoutingModule],
})
export class BasketModule {}
