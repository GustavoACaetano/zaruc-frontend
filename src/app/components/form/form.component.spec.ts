import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../button/button.component';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent, FieldComponent, ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verificacao se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verificacao se o numero de campos esta correto
  it('should render the correct number of fields', () => {
    component.fields = [
      { id: 'name', label: 'Name', placeholder: 'Enter name' },
      { id: 'email', label: 'Email', placeholder: 'Enter email' }
    ];
    fixture.detectChanges();

    const fieldComponents = fixture.debugElement.queryAll(By.directive(FieldComponent));
    expect(fieldComponents.length).toBe(2);
  });

  // Verificacao se o valor do campo esta mudando com o input
  it('should update field value on input event', () => {
    component.fields = [
      { id: 'name', label: 'Name', placeholder: 'Enter name', value: '' }
    ];
    fixture.detectChanges();

    const newValue = 'John Doe';
    component.entrada({ id: 'name', label: 'Name', placeholder: 'Enter name', value: newValue });

    expect(component.fields[0].value).toBe(newValue);
  });

  // Verificacao se a emissao esta enviando os valores corretos
  it('should emit formSubmit event with correct values', () => {
    spyOn(component.formSubmit, 'emit');

    component.fields = [
      { id: 'name', label: 'Name', placeholder: 'Enter name', value: 'Alice' },
      { id: 'email', label: 'Email', placeholder: 'Enter email', value: 'alice@example.com' }
    ];
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.directive(ButtonComponent));
    button.triggerEventHandler('btnSubmit', null);

    expect(component.formSubmit.emit).toHaveBeenCalledWith({
      name: 'Alice',
      email: 'alice@example.com'
    });
  });
});
