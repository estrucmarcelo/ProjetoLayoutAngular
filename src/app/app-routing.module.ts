import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { HomeComponent } from './home/home.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
   
    path: '' , component: NavbarComponent, canActivate: [AuthGuard],  children:[
      {path: 'home', component: HomeComponent},
      {path: 'funcionarios/editar/:id', component: EditarFuncionarioComponent},
      {path: 'funcionarios/listar',component: ListarFuncionarioComponent},
      {path: 'funcionarios/cadastrar',component: CadastrarFuncionarioComponent}
      
    ]

    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
