import { Course } from "./course.interface";
import { Subcategory } from "./subcategory.interface";

export interface Category {
  id: number;
  name: string;
  subcategories?: Subcategory[];
  courses?: Course[];
}
