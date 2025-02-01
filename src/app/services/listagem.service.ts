import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListagemResponse } from '../types/listagem-response.type';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {
  private url = 'http://localhost:8080/api/UserService/users'

  constructor(private http: HttpClient) { }

  listar() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<ListagemResponse[]>(this.url, { headers });
  }
}
