import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InPopupComponent } from './components/in-popup/in-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [InPopupComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatDialogModule],
  exports: [InPopupComponent],
  providers: [],
})
export class CoreModule {}
