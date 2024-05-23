import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ButtonComponent } from './components/button/button.component';
import { CartService } from './services/cart.service';
import { ColorpickerDirective } from './diretives/colorpicker.directive';


@NgModule({
  declarations: [
    CartComponent,
    ButtonComponent,
    ColorpickerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    ButtonComponent,
    ColorpickerDirective
  ],
})
export class SharedModule { }
