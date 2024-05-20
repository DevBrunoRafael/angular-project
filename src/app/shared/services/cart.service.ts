import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface IProduct {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // coldObservable$ = new Observable<number>((sub) => {
  //   const number = Math.floor(Math.random() * 100);
  //   sub.next(number);
  // });

  // hotObservable$ = new Subject<number>();

  // hotObservable2$ = new BehaviorSubject<number>(0);

  private cart: IProduct[] = [];

  private productsInCart$ = new BehaviorSubject<number>(0);

  constructor() {
    // setTimeout(() => {
    //   const number = Math.floor(Math.random() * 100);
    //   this.hotObservable$.next(number);
    // }, 7000)

    // this.coldObservable$.subscribe(value => console.log("cold 1 = ", value))
    // this.coldObservable$.subscribe(value => console.log("cold 2 = ", value))

    // this.coldObservable$.subscribe(value => console.log("cold 3 = ", value))

    // this.hotObservable$.subscribe(value => console.log("hot 1 = ", value))
    // this.hotObservable$.subscribe(value => console.log("hot 2 = ", value))

    // this.fetchContent().then(value => console.log(value));

    // this.fetchContentObs$().subscribe(value => console.log(value))
  }

  getProductsInCart$() {
    return this.productsInCart$.asObservable();
  }

  addProductInCar(produto: IProduct) {
    this.cart.push(produto);
    this.productsInCart$.next(this.cart.length)
  }

  // fetchContent(): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     console.log("promise invokada");

  //     setTimeout(() => {
  //       resolve("Observable")
  //       resolve("resolvido")
  //       resolve("valor retornado.")
  //     }, 5000);
  //   })
  // }

  // fetchContentObs$(): Observable<string> {
  //   return new Observable<string>((subscriber) => {
  //     console.log("observable invokado");

  //     setTimeout(() => {
  //       subscriber.next("Observable")
  //       subscriber.next("resolvido")
  //       subscriber.next("valor retornado.")
  //     }, 5000);
  //   })
  // }

}
