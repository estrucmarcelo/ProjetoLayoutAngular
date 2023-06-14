import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncionarioService } from '../funcionario/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent {

  @ViewChild('formFuncionario') formFuncionario!: NgForm
  funcionario!: Funcionario

  constructor(private funcionarioService: FuncionarioService, private router: Router){}

  ngOnInit():void{
    this.funcionario = new Funcionario()
  }


  cadastrar():void{
    if(this.formFuncionario.form.valid){
      this.funcionarioService.cadastrar(this.funcionario)
      this.router.navigate(["funcionarios/listar"]);
    }
  }


}
