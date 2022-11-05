import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(dateTime: string): string {
    return new Date(dateTime).toISOString().slice(0, 10);
  }

}
