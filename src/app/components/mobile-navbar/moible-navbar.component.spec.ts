import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MobileNavbarComponent } from './mobile-navbar.component'

describe('NavbarComponent', () => {
  let component: MobileNavbarComponent
  let fixture: ComponentFixture<MobileNavbarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNavbarComponent],
    })
    fixture = TestBed.createComponent(MobileNavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
