import { Injectable } from '@angular/core';
import { TestService } from './test.service';

import { Usuario } from './modelo/usuario';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario:Usuario={
    correo:null,
    password:null,
    tipo:null,
  }
  loggedIn:Boolean=false;
 
  constructor(private servicio:TestService, private router:Router) { }

  getlogin(correo:string,password:string){
   
    this.usuario.correo=correo;
    this.usuario.password=password;
    Swal.fire({
     icon: 'info',
     title: 'Espere por favor',
     text: 'Sus datos estan siendo ingresados en el sistema.',
     allowOutsideClick: false
   });
   Swal.showLoading();
 
    this.servicio.login_usuario(this.usuario).subscribe(
      resp=>{
        this.usuario=resp;
        if(Object.keys(resp).length==0){
          Swal.fire(
            {
              title:'Login de Usuario',
              text: 'Acceso Negado',
              
              icon:'error',
              allowOutsideClick: false
            }
          );
          
        
         
        }else{  
          
          this.set_usuario();
          Swal.fire(
            {
              title:'Login de Usuario',
              text: 'Acceso correcto',
              icon:'success',
          
              allowOutsideClick: false
            }
          );
          
         if(this.usuario[0].tipo==='usuario') this.router.navigate(['/formulario']);
         else if (this.usuario[0].tipo==='admin') this.router.navigate(['/lista-formulario']);
        }
        }
      
    );
   
      
   
    
        
  }

  set_usuario(){
    localStorage.setItem('correo',this.usuario[0].correo);
    localStorage.setItem('password',this.usuario[0].password);
    localStorage.setItem('tipo',this.usuario[0].tipo);
    
  }
  
  getCurrentUser(): String {
    let password = localStorage.getItem("password");
    let correo=localStorage.getItem("correo");
    let tipo=localStorage.getItem("tipo");
 
    if ( (correo!=undefined || correo!=null)  && (tipo!=undefined || tipo!=null)) {
     
      this.loggedIn=true;
      return correo;
    } else
     return null;
 
  }
 
  getlogout(){
 
    localStorage.removeItem("tipo");
    localStorage.removeItem("password");
    localStorage.removeItem("correo");
    this.loggedIn=false;
   
    
  }


}
