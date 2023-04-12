import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(){
    let flag = localStorage.getItem("logado");
    if(flag == "true"){
      return true
    }
    return false
  }
}
