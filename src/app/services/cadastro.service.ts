import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private url = 'http://localhost:8080/auth/register'

  constructor(private http: HttpClient) { }

  cadastrar(data: any) {
    data.role = 'ADMIN';
    console.log('Dados enviados para o serviço:', data);
    return this.http.post(this.url, data);
  }
}
