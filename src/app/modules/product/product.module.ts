import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class ProductModule { }
