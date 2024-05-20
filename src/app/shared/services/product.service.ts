import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductDto } from '../models/interfaces/product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url: string = "http://localhost:3000/products"

  constructor(private readonly http: HttpClient) { }

  fetchAllProducts(): Observable<IProductDto[]> {
    return this.http.get<IProductDto[]>(`${this.url}`);
  }

  fetchProductById(productId: number): Observable<IProductDto[]> {
    return this.http.get<IProductDto[]>(`${this.url}/${productId}`);
  }

  registerProduct(form: any): Observable<void> {
    return this.http.post<void>(`${this.url}`, form);
  }

  updateProduct(form: any, productId: number): Observable<void> {
    return this.http.put<void>(`${this.url}/${productId}`, form);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${productId}`)
  }
}
