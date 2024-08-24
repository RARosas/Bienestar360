import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedullerComponent } from './scheduller.component';

describe('SchedullerComponent', () => {
  let component: SchedullerComponent;
  let fixture: ComponentFixture<SchedullerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedullerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedullerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
