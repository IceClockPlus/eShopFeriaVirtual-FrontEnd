import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaulLayoutComponent } from './layout';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: 'producto',
        loadChildren: () => 
          import('./viewClient/product/product.module').then((m) => m.ProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
