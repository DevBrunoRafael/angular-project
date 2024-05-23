import { S3Service } from './../../../shared/services/s3.service';
import { CategoryEnum } from './../../../shared/models/enums/category-enum';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductForm } from 'src/app/shared/models/forms/product-form';
import { ProductImageForm } from 'src/app/shared/models/forms/product-image-form';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subject, catchError, filter, map, switchMap, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

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

  isEdit: boolean = false;

  constructor(
    private readonly s3Service: S3Service,
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    protected readonly authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(

      filter(params => params.hasOwnProperty("productId")),
      tap(_ => this.isEdit = true),
      map(params => {
        const productId = params["productId"];
        const productIdNumber = Number(productId);
        return productIdNumber;
      }),
      tap(id => console.log(id)),
      switchMap(productId => this.productService.fetchProductById(productId))

    ).subscribe({
      next: (response) => {
        this.productForm = ProductForm.createFormFromDto(response);
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit() {
    if (!this.isEdit) {

      this.s3Service.registerImageForProduct(this.imageForm).pipe(

        tap(savedImage => this.productForm.imageId = savedImage.id),
        tap(_ => console.log(this.productForm)),
        switchMap(_ => this.productService.registerProduct(this.productForm)),

      ).subscribe({
        next: (response) => {
          console.log("sucesso");
          this.successRegister();
        },
        error: (error) => console.error(error),
        complete: () => console.log("dasativar loading"),
      });

    } else {

      this.productService.updateProduct(this.productForm, this.productForm.id!).subscribe({
        next: (res) => {
          console.log("sucesso");
          this.successRegister();
        },
        error: (error) => console.error(error),
      })

    }
  }

  private successRegister() {
    this.router.navigate(["produtos/listar"]);
    this.form.reset();
    this.productForm = new ProductForm();
  }

  ngAfterViewInit(): void {
    console.log(this.form);

  }

}
