import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';

import { IndexComponent } from './pages/index/index.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [IndexComponent],
})
export class ProductModule {}
