import { Component, OnInit } from '@angular/core';
import { Formulario } from '../modelo/formulario';
import { TestService } from '../test.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //modelo de formulario
  formulario:Formulario={
     correo:null,
     p1:null,
     p2:null,
     p3:null,
     fecha:null,
   }
   // para tomar la fecha de hoy
   

  constructor(private servicio:TestService) { }

  ngOnInit(): void {
    let day=new Date();
    let mes=parseInt(''+day.getMonth())+1;

    this.formulario.correo=localStorage.getItem('correo');
    this.formulario.fecha= ''+day.getFullYear()+'-'+mes+'-'+day.getDate();//this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  }

  // funcion para ingresar el formulario
  guardar(){
    Swal.fire({
     icon:'info',
     title:'Cargando la transacción'
    });
    Swal.showLoading();
    this.servicio.ingresar_formulario(this.formulario).subscribe(resp=>{
      if(resp=='datos ingresados'){
      Swal.fire({
        icon:'success',
        text:'Formulario Ingresado'
      });
    }
    else {
      Swal.fire({
        icon:'warning',
        text:''+resp,
      });
    }
    })      
  }
}
