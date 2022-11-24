import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ProductComponent } from './product.component';

//Routing
import { ProductRoutingModule } from './product.routing.module';

//Angular Material Modules
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
  
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatTableModule
  ]
})
export class ProductModule { }
