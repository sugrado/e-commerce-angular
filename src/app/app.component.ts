import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewChecked {
  title = 'eCommerceClient';
  environment = environment;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
}
