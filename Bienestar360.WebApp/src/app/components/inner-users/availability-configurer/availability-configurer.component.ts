import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { WeekPaginatorComponent } from '../../utils/week-paginator/week-paginator.component';

interface Ranges {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-availability-configurer',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatPaginatorModule, WeekPaginatorComponent],
  templateUrl: './availability-configurer.component.html',
  styleUrl: './availability-configurer.component.scss',
})
export class AvailabilityConfigurerComponent {
  public timeRanges: Ranges[] = [];
  public selectedRange: number = 15;

  public currentDate: Date = new Date();
  public weekStart: Date = new Date();
  public weekEnd: Date = new Date();
  public shortWeekFormat: any = 'MMMM Do';

  constructor() {
    for (let i = 15; i < 135; i += 15) {
      this.timeRanges.push({ value: i, viewValue: i.toString() });
    }

  }
}
