import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
})
export class MobileNavbarComponent {
  @Output() toggleIsMobileMenuVisible: EventEmitter<void> =
    new EventEmitter<void>()

  onToggleClick(): void {
    this.toggleIsMobileMenuVisible.emit()
  }
}
