import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/login'

  constructor(private http: HttpClient) { }

  login(data: any) {
    console.log('Dados enviados para o serviço:', data);
    return this.http.post(this.url, data);
  }
}
