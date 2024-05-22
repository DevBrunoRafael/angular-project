import { S3Service } from './../../../shared/services/s3.service';
import { CategoryEnum } from './../../../shared/models/enums/category-enum';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductForm } from 'src/app/shared/models/forms/product-form';
import { ProductImageForm } from 'src/app/shared/models/forms/product-image-form';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subject, catchError, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit, AfterViewInit {

  @ViewChild('form') form!: NgForm;

  productForm: ProductForm = new ProductForm();
  imageForm: ProductImageForm = new ProductImageForm();

  readonly CategoryEnum = CategoryEnum;

  sub = new Subject<number>();

  constructor(
    private readonly s3Service: S3Service,
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => console.log(params));
    console.log(this.activatedRoute.snapshot.params);

  }

  onSubmit() {
    this.s3Service.registerImageForProduct(this.imageForm).pipe(

      tap(savedImage => this.productForm.imageId = savedImage.id),
      tap(_ => console.log(this.productForm)),
      switchMap(_ => this.productService.registerProduct(this.productForm)),

    ).subscribe({
      next: (response) => {
        console.log("sucesso");

        this.router.navigate(["produtos/listar"]);
        this.form.reset();
        this.productForm = new ProductForm();
      },
      error: (error) => console.error(error),
      complete: () => console.log("dasativar loading"),
    });

  }

  ngAfterViewInit(): void {
    console.log(this.form);

  }

}
