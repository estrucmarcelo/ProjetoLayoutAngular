import { Component } from '@angular/core';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncionarioService } from '../funcionario/funcionario.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent {

  funcionarios!: Funcionario[]

  constructor(private funcionarioService:FuncionarioService,private router: Router){}

  ngOnInit():void{
    this.funcionarios = this.listarTodos();
    //this.funcionarios = [
    //  new Funcionario(1,"Fabio"),
     // new Funcionario(2,"Lucas")
    //]
  }

  listarTodos():Funcionario[]{
    return this.funcionarioService.listarTodos();
  }

  editar(id?:number):void{
    console.log("funcionarios/editar/" + id)
      this.router.navigate(["funcionarios/editar/" + id]);
  }

  remover(id?:number):void{
    console.log("Cheguei aqui")
    this.funcionarioService.remover(id!)
      this.router.navigate(["funcionarios/listar"]);
  }

}
