import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { TitleComponent } from '../../components/title/title.component';
import { ListagemService } from '../../services/listagem.service';
import { ListagemResponse } from '../../types/listagem-response.type';

@Component({
  selector: 'app-listagem',
  imports: [TableComponent, TitleComponent],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {
  headers = ['Nome', 'Login', 'Senha'];
  items: ListagemResponse[] = [];

  constructor(private listagemService: ListagemService) {}

  ngOnInit() {
    this.listagemService.listar().subscribe(
      data => this.items = data
    );
  }
}
