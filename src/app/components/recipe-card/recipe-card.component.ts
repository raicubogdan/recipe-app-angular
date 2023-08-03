import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
})
export class RecipeCardComponent {
  @Input() recipe: Recipe = {
    id: '',
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
  }

  constructor(private apiService: ApiService, private router: Router) {}

  deleteRecipe(id: string): void {
    this.apiService.deleteRecipe(id).subscribe(() => {
      window.location.reload()
    })
  }

  navigateToEdit(id: string): void {
    this.router.navigateByUrl(`/edit/${id}`)
  }
}

export type Recipe = {
  id: string
  title: string
  description: string
  ingredients: string
  instructions: string
}
