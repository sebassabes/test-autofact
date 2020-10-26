import { Component, OnInit } from '@angular/core';
import { Formulario } from '../modelo/formulario';
import { TestService } from '../test.service';

@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.css']
})
export class ListaFormularioComponent implements OnInit {
   formulario:Formulario={
     correo:null,
     fecha:null,
   }
   lista:Formulario={
    correo:null,
    fecha:null,
  }

  constructor(private service:TestService) { }
  acceso:boolean=false;
  ngOnInit(): void {
  let tipo=localStorage.getItem("tipo");
  
  if(tipo!='admin'){
    this.acceso=false;
    
  }else  this.cargar_datos();


  }

cargar_datos(){
  this.service.consultar_formulario(this.formulario).subscribe(
    resp=>{
      
      this.lista=resp;
    }
  )
}
}
