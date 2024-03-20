import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormGroup, FormBuilder, and Validators
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.interface';
import { SubcategoryDTO } from 'src/app/dto/subcategory.dto';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  subcategories: SubcategoryDTO[] = [];
  newSubcategoryForm: FormGroup; // Define a FormGroup for new subcategory
  selectedSubcategory: SubcategoryDTO | any;
  categories$: Observable<Category[]> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService
  ) {
    this.newSubcategoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.loadSubcategories();
  }

  createSubcategory(): void {
    if (this.newSubcategoryForm.invalid) {
      console.error('Invalid form');
      return;
    }

    const categoryId = this.newSubcategoryForm.value.categoryId;
    console.log('Selected category:', categoryId);
    const newSubcategory: SubcategoryDTO = {
      id: 0,
      name: this.newSubcategoryForm.value.name,
      category: {
        id: this.newSubcategoryForm.value.categoryId
      }
    };

    this.subcategoryService.createSubcategory(newSubcategory).subscribe(
      createdSubcategory => {
        console.log('Subcategory created successfully:', createdSubcategory);
        this.newSubcategoryForm.reset();
      },
      error => {
        console.error('Error creating subcategory:', error);
      }
    );
  }

  loadSubcategories(): void {
    this.subcategoryService.getAllSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });
  }

  editSubcategory(subcategory: SubcategoryDTO): void {
    this.selectedSubcategory = subcategory;
  }

  deleteSubcategory(id: number): void {
    this.subcategoryService.deleteSubcategory(id).subscribe(
      () => {
        console.log('Subcategory deleted successfully');
        this.loadSubcategories();
      },
      error => {
        console.error('Error deleting subcategory:', error);
      }
    );
  }

  updateSubcategory(updatedSubcategory: SubcategoryDTO): void {
    if (!updatedSubcategory) {
      console.error('No subcategory selected');
      return;
    }

    this.subcategoryService.updateSubcategory(updatedSubcategory.id, updatedSubcategory).subscribe(
      () => {
        console.log('Subcategory updated successfully');
        this.selectedSubcategory = null;
        this.loadSubcategories();
      },
      error => {
        console.error('Error updating subcategory:', error);
      }
    );
  }


  cancelEdit(): void {
    this.selectedSubcategory = null;
  }
}
