import { Category } from "../models/category.interface";

export interface SubcategoryDTO {
  id: number;
  name: string;
  category: {
    id: number;
  };
}
