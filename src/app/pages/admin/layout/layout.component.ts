import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'in-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}
  test() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
