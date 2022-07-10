import { Component, OnInit } from '@angular/core';
import { CustomSpinnerService } from 'src/app/core/services/custom-spinner.service';

@Component({
  selector: 'in-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss'],
})
export class AllCustomersComponent implements OnInit {
  constructor(private baseSpinnerService: CustomSpinnerService) {}

  ngOnInit() {}
}
