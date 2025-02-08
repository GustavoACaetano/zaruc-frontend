import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verificacao se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verificacao se existe a emissao no click do botao
  it('should emit event on button click', () => {
    spyOn(component.btnSubmit, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.btnSubmit.emit).toHaveBeenCalled();
  });

  // Verificacao se a mensagem escrita esta correta
  it('should display the correct message', () => {
    component.message = 'Click Me';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Click Me');
  });
});