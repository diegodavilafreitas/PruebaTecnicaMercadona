import { Component, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListadoComponent } from "./listado/listado.component";
import { CrearComponent } from "./crear/crear.component";
import { EditadoComponent } from "./editado/editado.component";
import { DetallesProductoComponent } from "./detalles-producto/detalles-producto.component";

const appRoutes: Routes =[
    {path:'',component: ListadoComponent},
    {path:'listado', component: ListadoComponent},
    {path:'crear', component:CrearComponent},
    {path:'editado',component:EditadoComponent},
    {path:'editado/:_id',component:EditadoComponent},
    {path:'detallesProducto/:_id', component:DetallesProductoComponent},
    {path:'**', component:ListadoComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);