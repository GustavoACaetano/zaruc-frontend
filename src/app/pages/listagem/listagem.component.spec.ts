import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemComponent;
  let fixture: ComponentFixture<ListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verificacao se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
