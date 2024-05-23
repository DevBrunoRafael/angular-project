import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductComponent } from './product.component';
import { ReactiveFormProductComponent } from './reactive-form-product/reactive-form-product.component';
import { authenticatedGuard } from 'src/app/core/guards/authenticated.guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [authenticatedGuard],
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
        path: "criar/reactive",
        component: ReactiveFormProductComponent
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
