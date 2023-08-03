import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Recipe } from 'src/app/components/recipe-card/recipe-card.component'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = []

  constructor(private apiService: ApiService, private router: Router) {}

  loadRecipes(): void {
    this.apiService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes
    })
  }

  navigateToCreate(): void {
    this.router.navigateByUrl('/create')
  }

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe((recipes) => {
      console.log(recipes)
      this.recipes = recipes
    })
  }
}
