import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutes } from './product.routing';

@NgModule({
  imports: [
    CommonModule, 
    ProductRoutes
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
