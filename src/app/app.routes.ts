import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { AuthGuard } from './auth/AuthGuard';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "listagem",
        component: ListagemComponent,
        canActivate: [AuthGuard]
    }

];
