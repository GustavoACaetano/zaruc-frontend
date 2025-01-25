import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { FormComponent } from '../../components/form/form.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [TitleComponent, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formFields = [
    { id: 'login', label: 'Login', placeholder: 'Digite seu login' },
    { id: 'password', label: 'Senha', placeholder: 'Digite sua senha' }
  ];

  constructor(private loginService: LoginService) {}
  
  onFormSubmit(formData: any) {
    this.loginService.login(formData).subscribe({
      next: () => console.log('sucesso'),
      error: () => console.log('erro')
    });
  }

}
