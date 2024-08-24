import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-week-paginator',
  standalone: true,
  templateUrl: './week-paginator.component.html',
  styleUrls: ['./week-paginator.component.scss']
})

export class WeekPaginatorComponent {
  currentWeekStart: Date;
  currentWeekEnd: Date;

  @Output() previousWeekEvent = new EventEmitter<void>();
  @Output() nextWeekEvent = new EventEmitter<void>();

  constructor() {
    this.currentWeekStart = this.getStartOfWeek(new Date());
    this.currentWeekEnd = this.getEndOfWeek(this.currentWeekStart);
  }

  getStartOfWeek(date: Date): Date {
    const day = date.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust if the day is Sunday
    return new Date(date.setDate(diff));
  }

  getEndOfWeek(date: Date): Date {
    const startOfWeek = this.getStartOfWeek(date);
    return new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + 6);
  }

  previousWeek(): void {
    this.currentWeekStart = new Date(this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7));
    this.currentWeekEnd = this.getEndOfWeek(this.currentWeekStart);
    this.previousWeekEvent.emit();
  }

  nextWeek(): void {
    this.currentWeekStart = new Date(this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7));
    this.currentWeekEnd = this.getEndOfWeek(this.currentWeekStart);
    this.nextWeekEvent.emit();
  }

  getWeekRange(): string {
    const start = this.currentWeekStart.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    const end = this.currentWeekEnd.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
    return `${start} - ${end}`;
  }
}
