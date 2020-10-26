import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './modelo/usuario';
import { Formulario } from './modelo/formulario';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  API_URL='http://localhost/api-rest/public/index.php';
  constructor( private http:HttpClient) { }
  
  ingresar_formulario(formulario:any){
    return this.http.post(`${this.API_URL}/api/ingresar/formulario/`,formulario,{responseType: 'text'});
  }

  login_usuario(usuario:Usuario){
    return this.http.post(`${this.API_URL}/api/usuario/login/`,usuario);
  }

  consultar_formulario(formulario:Formulario){
    return this.http.post(`${this.API_URL}/api/formulario/consulta/`,formulario);
  }
  
}