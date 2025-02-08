import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, FieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verificacao se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verificacao se a label carregou 
  it('should render the label correctly', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const labelElement = fixture.nativeElement.querySelector('label');
    expect(labelElement.textContent).toContain('Test Label');
  });

  // Verificacao se a placeholder esta correta
  it('should render the placeholder correctly', () => {
    component.placeholder = 'Test Placeholder';
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.placeholder).toContain('Test Placeholder');
  });

  // Verificacao se o id carregou corretamente
  it('should render the id correctly', () => {
    component.id = 'test-id';
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.id).toContain('test-id');
  });

  // Verificacao se a emissao de entrada funcionou
  it('should emit newEntrada event when input changes', () => {
    spyOn(component.newEntrada, 'emit');
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'New Value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newEntrada.emit).toHaveBeenCalledWith(component);
  });
});