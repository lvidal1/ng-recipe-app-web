import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'recipe-form',
  templateUrl: 'recipe-form.component.html',
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert('s');
  }

  onFileSelected(event: any): void {}
}
