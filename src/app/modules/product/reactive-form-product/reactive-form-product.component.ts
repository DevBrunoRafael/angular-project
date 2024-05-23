import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductForm } from 'src/app/shared/models/forms/product-form';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-reactive-form-product',
  templateUrl: './reactive-form-product.component.html',
  styleUrls: ['./reactive-form-product.component.scss']
})
export class ReactiveFormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private produService: ProductService) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.max, Validators.email]],
      price: [0, [Validators.required]],
    })
  }

  onSubmit() {
    const valueForm = this.form.getRawValue() as ProductForm;

    this.form.valueChanges.subscribe(value => this.produService.registerProduct(value as ProductForm))

  }

}
