import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { FormComponent } from '../../components/form/form.component';
import { LoginService } from '../../services/login.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [TitleComponent, FormComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formFields = [
    { id: 'login', label: 'Login', placeholder: 'Digite seu login' },
    { id: 'password', label: 'Senha', placeholder: 'Digite sua senha' }
  ];

  constructor(private loginService: LoginService, private router: Router) {}

  onFormSubmit(formData: any) {
    this.loginService.login(formData).subscribe({
      next: () => {
        console.log('Login bem-sucedido!');
        this.router.navigate(['/listagem']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
      },
    });
  }

}
