import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IproductImage } from '../models/interfaces/product-image-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  private readonly url: string = "http://localhost:3000/S3"

  constructor(private readonly http: HttpClient) { }

  findImageByImageId(imageId: number): Observable<IproductImage> {
    return this.http.get<IproductImage>(`${this.url}/${imageId}`);
  }
}
