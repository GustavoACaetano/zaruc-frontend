import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  imports: [FormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  @Input("placeholder") placeholder!: string;
  @Input("id") id!: string;
  @Input("label") label!: string;
  @Input("value") value?: string;

  @Output() newEntrada = new EventEmitter<any>();

  entrada() {
    this.newEntrada.emit(this);
  }

}
