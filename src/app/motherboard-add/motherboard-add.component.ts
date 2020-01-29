import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MotherboardsService} from "../shared/services/motherboards.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Motherboard} from '../shared/models/motherboard.model';

@Component({
  selector: 'app-motherboard-add',
  templateUrl: './motherboard-add.component.html',
  styleUrls: ['./motherboard-add.component.css']
})
export class MotherboardAddComponent implements OnInit {
  @Output() addmotherboard = new EventEmitter<Motherboard>();

  id: number;
  addForm: FormGroup;
  disabled_form = false;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private motherboardsService: MotherboardsService) {
    this.activatedRouter.params.subscribe(param => {
       this.id = param.id;
    });
  }

  ngOnInit() {
    let editMotherboard = this.motherboardsService.get_motherboard_by_id(this.id);
    if (isNullOrUndefined(editMotherboard)) editMotherboard = {name: "", vendorcode: "", price: "", chipset: "", formfactor: ""};
    this.addForm = new FormGroup( {
      name: new FormControl({value: editMotherboard.name, disabled: this.disabled_form}, [Validators.required]),
      vendorcode: new FormControl({value: editMotherboard.vendorcode, disabled: this.disabled_form}, [Validators.required]),
      price: new FormControl({value: editMotherboard.price, disabled: this.disabled_form}, [Validators.required]),
      chipset: new FormControl({value: editMotherboard.chipset, disabled: this.disabled_form}, [Validators.required]),
      formfactor: new FormControl({value: editMotherboard.formfactor, disabled: this.disabled_form}, [Validators.required])
    })
  }

  onSave() {
    if (this.id) {
      let motherboard = new Motherboard (this.addForm.value.name, this.addForm.value.vendorcode, this.addForm.value.price, this.addForm.value.chipset, this.addForm.value.formfactor, this.id);
      this.motherboardsService.onEditMotherboard(motherboard);
    }
    else {
      let motherboard = new Motherboard (this.addForm.value.name, this.addForm.value.vendorcode, this.addForm.value.price, this.addForm.value.chipset, this.addForm.value.formfactor, this.id);
      this.motherboardsService.onAddMotherboard(motherboard);
    }
    this.router.navigate([`/motherboard`]); 
  }

}
