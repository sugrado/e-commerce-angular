import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './pages/admin/admin.module';
import { UiModule } from './pages/ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
