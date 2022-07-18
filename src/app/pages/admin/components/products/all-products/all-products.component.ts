import {
  CustomToastrService,
  ToastrMessageType,
} from './../../../../../core/services/custom-toastr.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { ListProduct } from '../contracts/list-product';
import { ProductService } from '../services/product.service';
import { DataResult } from 'src/app/core/results/data-result';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'in-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  environment = environment;
  displayedColumns: string[] = [
    'name',
    'stock',
    'price',
    'createdAt',
    'modifiedAt',
  ];
  dataSource!: MatTableDataSource<ListProduct>;
  constructor(
    private productService: ProductService,
    private customToastrService: CustomToastrService
  ) {}

  async ngOnInit() {
    await this.loadProducts();
  }

  async loadProducts() {
    environment.showSpinner = true;
    const allProducts: ListProduct[] = await this.productService.read(
      () => (environment.showSpinner = false),
      (error) => {
        this.customToastrService.message(error, 'Error', {
          messageType: ToastrMessageType.Error,
        });
        environment.showSpinner = true;
      }
    );
    console.log(allProducts);
    this.dataSource = new MatTableDataSource<ListProduct>(allProducts);
    this.dataSource.paginator = this.paginator;
  }
}
