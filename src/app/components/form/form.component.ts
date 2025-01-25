import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../button/button.component';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [FieldComponent, ButtonComponent],
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() fields: { id: string; label: string; placeholder: string, value?: string }[] = [];
  @Output() formSubmit = new EventEmitter<any>();

  entrada(field: { id: string; label: string; placeholder: string, value: string }) {
    this.fields.find(x => x.id == field.id)!.value = field.value;
  }

  emitirClick() {
    const formData = this.fields.reduce((acc: any, field: any) => {
      acc[field.id] = field.value;
      return acc;
    }, {});
    
    this.formSubmit.emit(formData);
  }
}

