import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component'
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component'
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './pages/home/home.component'
import { CreateComponent } from './pages/create/create.component'
import { EditComponent } from './pages/edit/edit.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MobileNavbarComponent,
    RecipeCardComponent,
    MobileMenuComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
