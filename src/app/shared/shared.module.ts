import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ButtonComponent } from './components/button/button.component';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    CartComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    ButtonComponent
  ],
})
export class SharedModule { }
