import { Pipe, PipeTransform } from '@angular/core';
import { Motherboard } from '../models/motherboard.model';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sortedPrice'
})
export class SortedPricePipe implements PipeTransform {

  transform(motherboards: Motherboard[], search: string): any {
    if (!isNullOrUndefined(motherboards) && (search || '').trim() !== "") {
      if(search == 'desc') {
        let filter_price = motherboards.sort((prev, next) => next.price - prev.price);
        return filter_price;
      } else if(search == 'asc') {
        let filter_price = motherboards.sort((prev, next) => prev.price - next.price);
        return filter_price;
      }
      else
        console.log('jopa3');
    }
    return motherboards;
  }

}
