import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  newCategory: Category = {
    name: '',
    id: 0
  };

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  createCategory(): void {
    this.categoryService.createCategory(this.newCategory).subscribe(createdCategory => {
      this.categories.push(createdCategory);
      this.newCategory = { name: '', id: 0 }; // Reset the new category object
    });
  }

  editCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  updateCategory(category: Category): void {
    this.categoryService.updateCategory(category).subscribe(updatedCategory => {
      const index = this.categories.findIndex(c => c.id === updatedCategory.id);
      if (index !== -1) {
        this.categories[index] = updatedCategory;
      }
      this.selectedCategoryId = null; // Exit edit mode
    });
  }

  deleteCategory(categoryId: number): void {
    this.categoryService.deleteCategory(categoryId).subscribe(() => {
      this.categories = this.categories.filter(c => c.id !== categoryId);
    });
  }
}
