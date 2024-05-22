import { Router } from '@angular/router';
import { S3Service } from './../../../shared/services/s3.service';
import { Component, OnInit } from '@angular/core';
import { Subject, catchError, forkJoin, map, retry, switchMap, tap } from 'rxjs';
import { IProductDto } from 'src/app/shared/models/interfaces/product-dto';
import { IproductImage } from 'src/app/shared/models/interfaces/product-image-dto';
import { ProductService } from 'src/app/shared/services/product.service';

type ProductViewModel = IProductDto & { image: IproductImage };

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: ProductViewModel[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly s3Service: S3Service,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.productService.fetchAllProducts().pipe(

      // tap(value => console.log(value)),
      map(products => products.map(product => {
        const discount = (product.price * (product.discount / 100));
        const valueFinal = product.price - discount;
        return {
          ...product,
          price: valueFinal
        }
      })),
      switchMap(products => {
        const imageIdsForProducts = products.map(p => p.imageId);

        const requestsFromGetImages = imageIdsForProducts.map(imageId => this.s3Service.findImageByImageId(imageId));

        return forkJoin(requestsFromGetImages).pipe(
          // tap(value => console.log(value)),
          map(images => {

            const values = products.map((product, index) => {
              return {
                ...product,
                image: images[index]
              }
            })

            return values as ProductViewModel[];
          })
        )
      })

    ).subscribe(res => {
      this.products = res;
    })
  }

  navigateToFormEdit(product: IProductDto) {
    this.router.navigate(["produtos/editar", product.id])
  }

}

