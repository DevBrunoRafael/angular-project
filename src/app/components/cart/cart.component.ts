import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="mt-10 relative w-fit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
      <div class="absolute -top-2 -right-2 bg-green-500 rounded-full size-6 text-center">
        {{ cartService.getProductsInCart$() | async }}
      </div>
    </div>
  `,
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(protected readonly cartService: CartService) {}

  // sub?: Subscription;

  ngOnInit(): void {
    // this.sub = this.cartService.getProductsInCart$().subscribe(value => {
    //   console.log("valor emitdo", value);
    //   this.countProductsInCart = value;
    // })
  }

  ngOnDestroy(): void {
    console.log("componente foi de base");
    // this.sub?.unsubscribe();
  }
}
