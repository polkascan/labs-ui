import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  today = new Date();
  todayDate = new Date().getDate();
  selected = new BehaviorSubject<Date | null>(this.today);
  viewMode: string = 'week';
  weekDays: Observable<Date[]>;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 || date === this.todayDate ? 'calendar-picker-date-has-events' : '';
    }

    return '';
  };

  constructor(private cd: ChangeDetectorRef) {
    this.weekDays = this.selected.pipe(
      map((d) => d || this.today),
      map((d) => {
        const dayNr = d.getDay();
        return [0,1,2,3,4,5,6].map((v) => new Date(d).setDate(d.getDate() + v - dayNr)) as any as Date[];
      })
    );
  }

  ngOnInit(): void {
  }

  goToToday(): void {
    this.selected.next(new Date());
  }
}
