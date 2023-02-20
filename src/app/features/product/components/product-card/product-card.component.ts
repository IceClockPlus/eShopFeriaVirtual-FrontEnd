import { Component, Input, OnInit } from '@angular/core';
import { ProductCardInfo } from '../../models/ProductCardInfo';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductCardInfo;
  constructor() {}

  ngOnInit() {}
}
