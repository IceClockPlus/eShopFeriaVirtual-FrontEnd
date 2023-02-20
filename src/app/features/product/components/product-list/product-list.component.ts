import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardInfo } from '../../models/ProductCardInfo';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList$ : Observable<Array<ProductCardInfo>>;
  constructor() {
    this.productList$ = new Observable<Array<ProductCardInfo>>;
  }

  ngOnInit(): void {
  }

}
