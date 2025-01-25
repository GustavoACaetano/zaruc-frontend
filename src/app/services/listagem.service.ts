import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListagemResponse } from '../types/listagem-response.type';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {
  private url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ListagemResponse[]>(this.url);
  }
}
