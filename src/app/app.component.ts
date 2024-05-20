import { Component } from '@angular/core';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  // AULA OBSERVABLES

  showCart: boolean = false;

  constructor(protected readonly cartService: CartService) {}

  toggleShowCart() {
    this.showCart = !this.showCart;
  }

  addProduct(event: Event) {
    const element = (event.target as HTMLInputElement);
    this.cartService.addProductInCar({ name: element.value });
    element.value = "";
  }

  // AULA DIRETIVAS

  // numeroGerado?: number;
  // readonly Status = Status;
  // currentStatus: Status = Status.CANCELADO;

  // handleClick(numero: number) {
  //   this.numeroGerado = numero;
  // }

  // changeStatus(event: Event) {
  //   const value = (event.target as HTMLSelectElement).value;
  //   this.currentStatus = value as Status;
  // }

  // clearNumber() {
  //   this.numeroGerado = undefined;
  // }
}

export enum Status {
  PENDENTE = "PENDENTE",
  CANCELADO = "CANCELADO",
  ENTREGUE = "ENTREGUE"
}
