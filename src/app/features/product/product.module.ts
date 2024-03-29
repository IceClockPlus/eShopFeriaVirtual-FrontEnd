import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';

//Pages
import { IndexComponent } from './pages/index/index.component';

//Components
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [IndexComponent, ProductCardComponent],
})
export class ProductModule {}
