import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { CrearComponent } from './crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditadoComponent } from './editado/editado.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CrearComponent,
    EditadoComponent,
    DetallesProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
