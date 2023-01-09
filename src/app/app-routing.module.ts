import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaulLayoutComponent } from './layout';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./features/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'product',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
