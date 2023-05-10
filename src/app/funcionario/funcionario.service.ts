import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarTodos(): Funcionario[]{
    const funcionarios = localStorage['funcionarios'];
    return funcionarios ? JSON.parse(funcionarios): [];
  }

  cadastrar(funcionario: Funcionario):void{
    const funcionarios = this.listarTodos();
    funcionario.id  = new Date().getTime();
    funcionarios.push(funcionario);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  buscarPorID(id:number): Funcionario{
    const funcionarios: Funcionario[] = this.listarTodos();
    let funcionario: Funcionario;
    funcionario =  funcionarios.find(funcionario => funcionario.id === id) as Funcionario;
    return funcionario;
  }

}
