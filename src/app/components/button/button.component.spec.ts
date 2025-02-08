import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent] // Declare the component
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on button click', () => {
    spyOn(component.btnSubmit, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.btnSubmit.emit).toHaveBeenCalled();
  });

  it('should display the correct message', () => {
    component.message = 'Click Me';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Click Me');
  });
});