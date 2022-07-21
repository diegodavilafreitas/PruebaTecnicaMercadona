import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public form: FormGroup; // Esta parte crea un error, como no debe ser funcional no profundice mas en solucionarlo.

  constructor(private RestService:RestService, private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo:[''],
      precio:[''],
      pesoFormato:[''],
      imagen:['']
    });
  }

  addProduct(){
    this.RestService.post('http://localhost:3000/rows',
    {
      titulo: this.form.value.titulo,
      precio: this.form.value.precio,
      pesoFormato: this.form.value.pesoFormato,
      image: this.form.value.image
    }
    )
    .subscribe(respuesta=>{
      console.log('ok')
      this.form.reset();
    })
  }

  btnCrearAlert(){
    alert('Este boton no es funcional solo redirige al listado de productos.')
  }

}
