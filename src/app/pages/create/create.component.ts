import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service'
import { Router } from '@angular/router'
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  recipeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: ['', Validators.required],
    instructions: ['', Validators.required],
  })

  onSubmit() {
    if (this.recipeForm.valid) {
      const description = this.recipeForm.value.description?.trim()
      const ingredients = this.recipeForm.value.ingredients?.trim()
      const instructions = this.recipeForm.value.instructions?.trim()
      const title = this.recipeForm.value.title?.trim()

      if (description && ingredients && instructions && title) {
        this.apiService
          .createRecipe({
            description,
            ingredients,
            instructions,
            title,
            id: uuid(),
          })
          .subscribe({
            next: () => {
              this.router.navigateByUrl('/')
            },
          })
      }
    }
  }
}
