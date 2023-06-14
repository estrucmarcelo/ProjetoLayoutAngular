import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncionarioService } from '../funcionario/funcionario.service';


@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

constructor(private funcionarioService: FuncionarioService, 
  private router:Router, 
  private route: ActivatedRoute){}

@ViewChild('formFuncionario',{static:true}) formFuncionario!: NgForm
funcionario!:Funcionario
id!: number
ngOnInit(): void {
  this.id = +this.route.snapshot.params['id']
  this.funcionario = this.funcionarioService.buscarPorID(this.id)
}

atualizar():void{
  if(this.formFuncionario.form.valid){
    this.funcionarioService.atualizar(this.funcionario)
    this.router.navigate(['/funcionarios/listar'])
  }
}




}
