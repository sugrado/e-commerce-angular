import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
@NgModule({
  imports: [CommonModule, LayoutModule, AdminRoutingModule, ComponentsModule],
  declarations: [AdminComponent],
  exports: [LayoutModule],
})
export class AdminModule {}
