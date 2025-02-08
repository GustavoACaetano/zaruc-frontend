import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListagemService } from './listagem.service';

describe('ListagemService', () => {
  let service: ListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
