import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subject, takeUntil } from 'rxjs'
import { Recipe } from 'src/app/components/recipe-card/recipe-card.component'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {
    this.loading$ = this.apiService.loading$
  }

  recipes: Recipe[] = []
  loading$: Observable<boolean>
  error = ''

  private ngUnsubscribe = new Subject<void>()

  navigateToCreate(): void {
    this.router.navigateByUrl('/create')
  }

  loadRecipes(): void {
    this.apiService.getAllRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes
      },
      error: (error) => {
        console.log('error in client reached')
        this.error = error.message
      },
    })
  }

  ngOnInit() {
    this.loadRecipes()

    this.apiService.recipeDeleted$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.loadRecipes()
      })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
