import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'recipe-app-angular'

  isMobileMenuVisible = false

  toggleIsVisible() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible
  }
}
