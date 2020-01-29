import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Processor } from '../shared/models/processor.model';

@Component({
  selector: 'app-processor-view',
  templateUrl: './processor-view.component.html',
  styleUrls: ['./processor-view.component.css']
})
export class ProcessorViewComponent implements OnInit {

  @Input() inProcessor: Processor; 
  @Output() delProcessor = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  onDeleteProcessor () {
    this.delProcessor.emit(this.inProcessor.id);
  }


}
