import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
})
export class MobileNavbarComponent {
  @Output() toggleIsVisible: EventEmitter<void> = new EventEmitter<void>()

  onToggleClick(): void {
    this.toggleIsVisible.emit()
  }
}
