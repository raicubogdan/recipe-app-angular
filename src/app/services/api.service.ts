import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject, throwError } from 'rxjs'
import { catchError, finalize } from 'rxjs/operators'
import { Recipe } from '../components/recipe-card/recipe-card.component'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api' // Base API URL, this will be proxied by proxy.conf.json
  private loadingSubject = new BehaviorSubject<boolean>(false)
  public loading$: Observable<boolean> = this.loadingSubject.asObservable()

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    this.loadingSubject.next(true)

    return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`).pipe(
      catchError((error) => {
        console.error('Error fetching recipes:', error)
        return throwError(() => new Error('test'))
      }),
      finalize(() => this.loadingSubject.next(false))
    )
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    this.loadingSubject.next(true)

    return this.http.post<Recipe>(`${this.apiUrl}/recipes`, recipe).pipe(
      catchError((error) => {
        console.error('Error creating recipe:', error)
        return throwError(() => new Error('test'))
      }),
      finalize(() => this.loadingSubject.next(false))
    )
  }

  updateRecipe(id: string, recipe: Recipe): Observable<Recipe> {
    this.loadingSubject.next(true)

    return this.http.put<Recipe>(`${this.apiUrl}/recipes/${id}`, recipe).pipe(
      catchError((error) => {
        console.error('Error updating recipe:', error)
        return throwError(() => new Error('test'))
      }),
      finalize(() => this.loadingSubject.next(false))
    )
  }

  deleteRecipe(id: string): Observable<void> {
    this.loadingSubject.next(true)

    return this.http.delete<void>(`${this.apiUrl}/recipes/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting recipe:', error)
        return throwError(() => new Error('test'))
      }),
      finalize(() => this.loadingSubject.next(false))
    )
  }
}
