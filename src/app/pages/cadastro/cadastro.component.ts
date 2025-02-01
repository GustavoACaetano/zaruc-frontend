import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { FormComponent } from '../../components/form/form.component';
import { CadastroService } from '../../services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [TitleComponent, FormComponent],
  providers: [CadastroService],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formFields = [
    { id: 'name', label: 'Nome', placeholder: 'Digite um nome', value: undefined },
    { id: 'login', label: 'Login', placeholder: 'Digite um login', value: undefined },
    { id: 'password', label: 'Senha', placeholder: 'Digite uma senha', value: undefined }
  ];

  constructor(private cadastroService: CadastroService, private router: Router) {}

  onFormSubmit(formData: any) {
    this.cadastroService.cadastrar(formData).subscribe({
      error: (data) => {
        if (data.status == 200) this.router.navigate(['/login']);
      }
    });
  }
}
