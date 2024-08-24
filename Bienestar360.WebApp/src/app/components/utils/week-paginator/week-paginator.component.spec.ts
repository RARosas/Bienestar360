import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPaginatorComponent } from './week-paginator.component';

describe('WeekPaginatorComponent', () => {
  let component: WeekPaginatorComponent;
  let fixture: ComponentFixture<WeekPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekPaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
