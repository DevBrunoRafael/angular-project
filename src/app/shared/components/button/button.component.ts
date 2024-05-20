import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="bg-black text-white rounded-md px-3 py-1.5" [ngClass]="twClass" (click)="generateNumber()">
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() twClass: string = '';
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  generateNumber() {
    const number = Math.floor(Math.random() * 100);
    this.onClick.emit(number);
  }
}
