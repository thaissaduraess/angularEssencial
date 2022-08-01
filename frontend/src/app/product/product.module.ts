import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from '../components/product/product-create/product-create.component';
import { ProductDeleteComponent } from '../components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from '../components/product/product-update/product-update.component';
import { ProductCrudComponent } from '../views/product-crud/product-crud.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'products', component: ProductCrudComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'product/delete/:id', component: ProductDeleteComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
   ]
})

export class ProductModule { }
