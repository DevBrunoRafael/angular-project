import { CategoryEnum } from "../enums/category-enum";

export interface IProductDto {
  id: number,
  name: string,
  description: string,
  price: number,
  discount: number,
  imageId: number,
  category: CategoryEnum
}
