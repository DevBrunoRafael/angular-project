import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  numeroGerado?: number;
  readonly Status = Status;
  currentStatus: Status = Status.CANCELADO;

  handleClick(numero: number) {
    this.numeroGerado = numero;
  }

  changeStatus(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.currentStatus = value as Status;
  }

  clearNumber() {
    this.numeroGerado = undefined;
  }
}

export enum Status {
  PENDENTE = "PENDENTE",
  CANCELADO = "CANCELADO",
  ENTREGUE = "ENTREGUE"
}
