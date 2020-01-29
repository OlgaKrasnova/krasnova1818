import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Motherboard} from '../shared/models/motherboard.model';

@Component({
  selector: 'app-motherboard-view',
  templateUrl: './motherboard-view.component.html',
  styleUrls: ['./motherboard-view.component.css']
})

export class MotherboardViewComponent implements OnInit {
  @Input() inMotherboard: Motherboard; 
  @Output() delMotherboard = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  onDeleteMotherboard () {
    this.delMotherboard.emit(this.inMotherboard.id);
  }
}
