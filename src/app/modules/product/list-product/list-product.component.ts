import { Component, OnInit } from '@angular/core';
import { IProductDto } from 'src/app/shared/models/interfaces/product-dto';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: IProductDto[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchAllProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
  }
}
