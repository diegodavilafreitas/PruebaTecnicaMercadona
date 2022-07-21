import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public products: any;
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/rows')
    .subscribe(
      respuesta=>{
        this.products = respuesta;
      },error=>{
        console.log(error)
      })
  }

}
