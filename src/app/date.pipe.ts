import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    let dayDiff = this.diffFromNow(value, (1000 * 3600 * 24));
    let monthDiff = this.diffFromNow(value, (1000 * 3600 * 24 * 30));
    // if(dayDiff === -1) return 'yesterday';
    // if(dayDiff === 1)  return 'tommorrow';
    // if(dayDiff === 0)  return 'today';
    // if(dayDiff > 0 && dayDiff < 7)  return 'soon';
    // if(dayDiff < 0 && dayDiff > -7)  return 'some time ago';
    if(monthDiff === -1) return 'miesiąc temu';
    if(monthDiff === 1)  return 'za miesiąc';
    if(monthDiff === 0)  return 'w tym miesiącu';
    if(monthDiff > 0 && monthDiff < 12)  return 'za ' + monthDiff + ' miesiące';
    if(monthDiff < 0 && monthDiff > -12)  return (-1*monthDiff) + ' miesięcy temu';
    return this.formatDate(value);
  }

  private diffFromNow(then: Date, factor: number): number {
    var now = new Date();
    var timeDiff = then.getTime() - now.getTime();
    return Math.round(timeDiff / factor);
  }
  private formatDate(date: Date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}
