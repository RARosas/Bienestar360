import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityConfigurerComponent } from './availability-configurer.component';

describe('AvailabilityConfigurerComponent', () => {
  let component: AvailabilityConfigurerComponent;
  let fixture: ComponentFixture<AvailabilityConfigurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityConfigurerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityConfigurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
