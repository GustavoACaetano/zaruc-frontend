import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input("message") message!: string;

  @Output() btnSubmit = new EventEmitter<any>();

  emitirClick() {
    this.btnSubmit.emit();
  }
}
