import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() inCard: Card; 
  @Output() delCard = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  onDeleteCard () {
    this.delCard.emit(this.inCard.id);
  }

}
