import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CadastroService } from './cadastro.service';

describe('CadastroService', () => {
  let service: CadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
