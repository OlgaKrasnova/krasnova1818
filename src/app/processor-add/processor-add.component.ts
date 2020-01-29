import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Processor } from '../shared/models/processor.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { ProcessorsService } from '../shared/services/processors.service';

@Component({
  selector: 'app-processor-add',
  templateUrl: './processor-add.component.html',
  styleUrls: ['./processor-add.component.css']
})
export class ProcessorAddComponent implements OnInit {
  @Output() addprocessor = new EventEmitter<Processor>();

  id: number;
  addFormProcessor: FormGroup;
  disabled_form = false;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private processorsServise: ProcessorsService) {
    this.activatedRouter.params.subscribe(param => {
       this.id = param.id;
    });
  }

  ngOnInit() {
    let editProcessor = this.processorsServise.get_processor_by_id(this.id);
    if (isNullOrUndefined(editProcessor)) editProcessor = {name: "", vendorcode: "", price: "", chipset: "", core: "", frequency: ""};
    this.addFormProcessor = new FormGroup( {
      name: new FormControl({value: editProcessor.name, disabled: this.disabled_form}, [Validators.required]),
      vendorcode: new FormControl({value: editProcessor.vendorcode, disabled: this.disabled_form}, [Validators.required]),
      price: new FormControl({value: editProcessor.price, disabled: this.disabled_form}, [Validators.required]),
      chipset: new FormControl({value: editProcessor.chipset, disabled: this.disabled_form}, [Validators.required]),
      core: new FormControl({value: editProcessor.core, disabled: this.disabled_form}, [Validators.required]),
      frequency: new FormControl({value: editProcessor.frequency, disabled: this.disabled_form}, [Validators.required])
    })
  }

  onSave() {
    if (this.id) {
      let processor = new Processor (this.addFormProcessor.value.name, this.addFormProcessor.value.vendorcode, this.addFormProcessor.value.price, this.addFormProcessor.value.chipset, this.addFormProcessor.value.core, this.addFormProcessor.value.frequency, this.id);
      this.processorsServise.onEditProcessor(processor);
    }
    else {
      let processor = new Processor (this.addFormProcessor.value.name, this.addFormProcessor.value.vendorcode, this.addFormProcessor.value.price, this.addFormProcessor.value.chipset, this.addFormProcessor.value.core, this.addFormProcessor.value.frequency, this.id);
      this.processorsServise.onAddProcessor(processor);
    }
    this.router.navigate([`/processor`]); 
  }

}
