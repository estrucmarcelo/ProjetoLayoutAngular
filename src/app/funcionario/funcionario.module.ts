import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from './funcionario.service';
import { ListarFuncionarioComponent } from '../listar-funcionario/listar-funcionario.component';



@NgModule({
  declarations: [
    ListarFuncionarioComponent
  ],
  imports: [
    CommonModule
    
  ],
  providers:[
    FuncionarioService
  ]
})
export class FuncionarioModule { }
