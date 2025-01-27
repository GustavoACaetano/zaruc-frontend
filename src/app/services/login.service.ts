import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login(data: any) {
    console.log('Dados enviados para o serviço:', data);
    return this.http.post<{ token: string }>(this.url, data).pipe(
      tap((response) => {
        // Armazena o token no localStorage
        localStorage.setItem('authToken', response.token);
      })
    );
  }

  // Método para obter o token armazenado
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
