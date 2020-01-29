import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";
import { Motherboard } from '../models/motherboard.model';

@Pipe({
  name: 'filterVendorCode'
})
export class FilterVendorCodePipe implements PipeTransform {

  transform(motherboards: Motherboard[], search: string) {
    if (!isNullOrUndefined(motherboards) && (search || '').trim() !== "") {
      let filter_vendorcode = motherboards.filter(
        note => note.vendorcode.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter_vendorcode;
    }
    return motherboards;
  }
}
