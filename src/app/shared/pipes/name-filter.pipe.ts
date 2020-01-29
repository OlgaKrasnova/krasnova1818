import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";
import { Motherboard } from '../models/motherboard.model';

@Pipe({
  name: 'filterName'
})
export class NameFilterPipe implements PipeTransform {
  transform(motherboards: Motherboard[], search: string) {
    if (!isNullOrUndefined(motherboards) && (search || '').trim() !== "") {
      let filter_name = motherboards.filter(
        motherboard => motherboard.name.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter_name;
    }
    return motherboards;
  }
}
