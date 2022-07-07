import { Component, OnInit } from '@angular/core';
import { BaseSpinnerService } from 'src/app/core/services/baseSpinner.service';

@Component({
  selector: 'in-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss'],
})
export class AllCustomersComponent implements OnInit {
  constructor(private baseSpinnerService: BaseSpinnerService) {}

  ngOnInit() {}
}
