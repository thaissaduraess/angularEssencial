import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

export

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
