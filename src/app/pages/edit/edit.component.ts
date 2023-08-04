import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe } from 'src/app/components/recipe-card/recipe-card.component'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  recipeId: string | null // Assuming you get the recipeId from the route parameter
  recipe: Recipe = {
    id: '',
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
  }

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recipeId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe({
      next: (recipes) => {
        this.recipe = recipes.filter((recipe) => recipe.id === this.recipeId)[0]
        this.populateForm()
      },
    })
  }

  recipeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: ['', Validators.required],
    instructions: ['', Validators.required],
  })

  populateForm(): void {
    this.recipeForm.setValue({
      title: this.recipe.title,
      description: this.recipe.description,
      ingredients: this.recipe.ingredients,
      instructions: this.recipe.instructions,
    })
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const description = this.recipeForm.value.description?.trim()
      const ingredients = this.recipeForm.value.ingredients?.trim()
      const instructions = this.recipeForm.value.instructions?.trim()
      const title = this.recipeForm.value.title?.trim()

      if (description && ingredients && instructions && title) {
        this.apiService
          .updateRecipe(this.recipe.id, {
            description,
            ingredients,
            instructions,
            title,
            id: this.recipe.id,
          })
          .subscribe(() => {
            this.router.navigateByUrl('/')
          })
      }
    }
  }
}
