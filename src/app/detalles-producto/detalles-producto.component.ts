import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  public products: any;
  public productID: string;
  constructor(private RestService:RestService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto():void{
    this.activatedRoute.params.subscribe(
      editProducto =>{
        let id=editProducto['_id'];
        this.productID = id;
        console.log(id);
        if(id){
          this.RestService.get('http://localhost:3000/rows').subscribe(
            respuesta=>{
              this.products = respuesta;
              console.log(respuesta)
            },error=>{
              console.log(error)
            });
        }
      }
    )
  }

}
