import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from './funcionario.service';
import { ListarFuncionarioComponent } from '../listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from '../cadastrar-funcionario/cadastrar-funcionario.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component';

@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
    
  ],
  providers:[
    FuncionarioService
  ]
})
export class FuncionarioModule { }
