import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {MotherboardsApiService} from "./motherboards-api.service";
import {isNullOrUndefined} from "util";
import { Motherboard } from '../models/motherboard.model';

@Injectable({
  providedIn: 'root'
})
export class MotherboardsService implements OnInit{
  motherboards: any;

  constructor(private motherboardsApiService: MotherboardsApiService) { 
    this.get_motherboards();
  }

  ngOnInit() {

  }

  async get_motherboards () {
    try {
      let gmotherboards = this.motherboardsApiService.getMotherboards();
      this.motherboards = (isNullOrUndefined(await gmotherboards)) ? [] : await gmotherboards;
    } catch (err) {
      console.log(err);
    }
  }
  
  get_motherboard_by_id (id: number) {
    if (typeof this.motherboards == 'undefined') 
      console.log('ой');
    else
      return this.motherboards.find(motherboard => motherboard.id === id);
  }

  async onAddMotherboard (motherboard: Motherboard) {
    motherboard.id = (this.motherboards.length)
      ? this.motherboards[this.motherboards.length - 1].id + 1
      : 1;
    this.motherboards.push(motherboard);
    try {
      await this.motherboardsApiService.postMotherboards({
        name: motherboard.name, vendorcode: motherboard.vendorcode, price: motherboard.price, chipset: motherboard.chipset, formfactor: motherboard.formfactor});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onEditMotherboard (ed_motherboard: Motherboard) {
    this.motherboards.splice (
      this.motherboards.findIndex(motherboard => {motherboard.id === ed_motherboard.id}), 1, ed_motherboard);
    try {
      await this.motherboardsApiService.putMotherboards(ed_motherboard.id, {
        name: ed_motherboard.name, vendorcode: ed_motherboard.vendorcode, price: ed_motherboard.price, chipset: ed_motherboard.chipset, formfactor: ed_motherboard.formfactor});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onDeleteMotherboard (del_motherboard_id: number) {
    this.motherboards.splice(this.motherboards.indexOf(this.motherboards.find((element, index, array) => {
      return (element.id === del_motherboard_id)
    })), 1); 
    try {
      await this.motherboardsApiService.deleteMotherboards(del_motherboard_id);
    }
    catch (e) {
      console.error(e);
    }
  }
}
