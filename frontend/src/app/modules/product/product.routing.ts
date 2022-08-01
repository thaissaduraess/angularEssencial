import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from 'src/app/components/product/product-create/product-create.component';
import { ProductUpdateComponent } from 'src/app/components/product/product-update/product-update.component';
import { ProductDeleteComponent } from 'src/app/components/product/product-delete/product-delete.component';

const routes: Routes = [
  {
    path:  '',
    component: ProductComponent,
    children: [
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'update/:id',
        component: ProductUpdateComponent
      },
      {
        path: 'delete/:id',
        component: ProductDeleteComponent
      }
    ]
   },
];

export const ProductRoutes = RouterModule.forChild(routes);
