import { Component, OnInit } from '@angular/core';

import { from, Observable, of} from 'rxjs';
import { ProductDTO } from 'src/app/core/models/products/ProductDTO';

import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products$ : Observable<ProductDTO[]>;
  public columnsToDisplay = ['id'];
  
  constructor(private productService: ProductService) { 
    this.products$ = new Observable<ProductDTO[]>;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response) =>{
        this.products$ = of(response.data)
      }
    })
  }

}
