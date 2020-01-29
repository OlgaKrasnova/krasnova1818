import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

}
