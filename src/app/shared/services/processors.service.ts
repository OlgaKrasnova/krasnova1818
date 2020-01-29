import { Injectable } from '@angular/core';
import { ProcessorsApiService } from './processors-api.service';
import { isNullOrUndefined } from 'util';
import { Processor } from '../models/processor.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessorsService {
  processors: any;

  constructor(private processorsApiService: ProcessorsApiService) { 
    this.get_processors();
  }

  ngOnInit() {

  }

  async get_processors () {
    try {
      let gprocessors = this.processorsApiService.getProcessors("processor");
      this.processors = (isNullOrUndefined(await gprocessors)) ? [] : await gprocessors;
    } catch (err) {
      console.log(err);
    }
  }
  
  get_processor_by_id (id: number) {
    if (typeof this.processors == 'undefined') 
      console.log('ой');
    else
      return this.processors.find(processor => processor.id === id);
  }

  async onAddProcessor (processor: Processor) {
    processor.id = (this.processors.length)
      ? this.processors[this.processors.length - 1].id + 1
      : 1;
    this.processors.push(processor);
    try {
      await this.processorsApiService.postProcessors({
        name: processor.name, vendorcode: processor.vendorcode, price: processor.price, chipset: processor.chipset, core: processor.core, frequency: processor.frequency});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onEditProcessor(ed_processor: Processor) {
    this.processors.splice (
      this.processors.findIndex(processor => {processor.id === ed_processor.id}), 1, ed_processor);
    try {
      await this.processorsApiService.putProcessors(ed_processor.id, {
        name: ed_processor.name, vendorcode: ed_processor.vendorcode, price: ed_processor.price, chipset: ed_processor.chipset, core: ed_processor.core, frequency: ed_processor.frequency});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onDeleteProcessor (del_processor_id: number) {
    this.processors.splice(this.processors.indexOf(this.processors.find((element, index, array) => {
      return (element.id === del_processor_id)
    })), 1); 
    try {
      await this.processorsApiService.deleteProcessors(del_processor_id);
    }
    catch (e) {
      console.error(e);
    }
  }

}
