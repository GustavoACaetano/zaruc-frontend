import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private url = 'http://localhost:3000/users/cadastro'

  constructor(private http: HttpClient) { }

  cadastrar(data: any) {
    console.log('Dados enviados para o serviço:', data);
    return this.http.post(this.url, data);
  }
}
