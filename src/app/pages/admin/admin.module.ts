import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [CommonModule, LayoutModule, ComponentsModule],
  declarations: [],
  exports: [LayoutModule],
})
export class AdminModule {}
