import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   usuario:Usuario={
     correo:null,
     password:null,
   }
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    if(this.login.getCurrentUser()!=null){
      this.login.getlogout();
      }
  }
  
  entrar_charla(){
   
   
    this.login.getlogin(this.usuario.correo,this.usuario.password);

  }

}
