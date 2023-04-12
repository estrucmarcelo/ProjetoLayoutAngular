import { Component } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { FormControl, Validators} from '@angular/forms'


import {Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private router: Router){}

@Input() credencial: Credenciais = {
  email: '',
  senha: ''
}

email = new FormControl(null,Validators.email)
senha = new FormControl(null,Validators.minLength(4))



validaDados():boolean{
  if(this.email.valid && this.senha.valid){
    
    return true;
  }else{
    return false
  }
}

logar(){
  if(this.credencial.email == "estrucmarcelo@gmail.com"){
    localStorage.setItem('logado',"true")
    this.router.navigate([''])
  }

  
}




}
