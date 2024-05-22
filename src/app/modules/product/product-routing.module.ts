import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
    children: [
      {
        path: "listar",
        component: ListProductComponent
      },
      {
        path: "criar",
        component: FormProductComponent
      },
      {
        path: "editar/:productId",
        component: FormProductComponent
      },
      {
        path: "",
        redirectTo: "criar",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
