import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {
  @Input() isMobileMenuVisible: boolean = false
}
