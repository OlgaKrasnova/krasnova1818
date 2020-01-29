import { Pipe, PipeTransform } from '@angular/core';
import { Motherboard } from '../models/motherboard.model';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sortedId'
})
export class SortedIdPipe implements PipeTransform {
  transform(motherboards: Motherboard[], search: string): any {
    if (!isNullOrUndefined(motherboards) && (search || '').trim() !== "") {
      if(search == 'desc') {
        let filter_id = motherboards.sort((prev, next) => next.id - prev.id);
        return filter_id;
      } else if(search == 'asc') {
        let filter_id = motherboards.sort((prev, next) => prev.id - next.id);
        return filter_id;
      }
      else
        console.log('jopa2');
    }
    return motherboards;
  }
}
