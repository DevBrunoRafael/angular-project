import { CategoryEnum } from "../enums/category-enum";

export class ProductForm {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  imageId?: number;
  category?: CategoryEnum

  constructor() {}
}
