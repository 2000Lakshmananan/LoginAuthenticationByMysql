import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidUrlPageComponent } from './invalid-url-page.component';

describe('InvalidUrlPageComponent', () => {
  let component: InvalidUrlPageComponent;
  let fixture: ComponentFixture<InvalidUrlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidUrlPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidUrlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
