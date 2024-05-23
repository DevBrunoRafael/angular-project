import { CategoryEnum } from "../enums/category-enum";
import { IProductDto } from "../interfaces/product-dto";

export class ProductForm {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  imageId?: number;
  category?: CategoryEnum

  constructor() {}

  static createFormFromDto(dto: IProductDto): ProductForm {
    const form = new ProductForm();
    form.id = dto.id;
    form.category = dto.category;
    form.price = dto.price;
    form.discount = dto.discount;
    form.imageId = dto.imageId;
    form.description = dto.description;
    form.name = dto.name;
    return form;
  }
}
