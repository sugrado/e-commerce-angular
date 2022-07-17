import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CustomToastrService,
  ToastrMessageType,
} from 'src/app/core/services/custom-toastr.service';
import { Product } from '../contracts/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'in-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  popupVisible: boolean = false;
  product!: Product;
  productCreateForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private customToastrService: CustomToastrService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.createProductCreateForm();
  }

  createProductCreateForm() {
    this.productCreateForm = this.formBuilder.group({
      name: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  add() {
    this.productCreateForm.reset();
    this.popupVisible = true;
  }

  save() {
    if (this.productCreateForm.invalid) {
      this.customToastrService.message(
        'Name, stock and price required!',
        'Form Error',
        { messageType: ToastrMessageType.Error }
      );
      return;
    }

    environment.showSpinner = true;
    this.productService
      .create(<Product>{
        name: this.productCreateForm.value.name,
        stock: this.productCreateForm.value.stock,
        price: this.productCreateForm.value.price,
      })
      .subscribe((res) => {
        this.customToastrService.message('Product created successfully!');
        this.closePopup();
        environment.showSpinner = false;
      });
  }

  closePopup() {
    this.popupVisible = false;
  }
}
