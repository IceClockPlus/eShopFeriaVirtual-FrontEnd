import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaulLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: DefaulLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
