import { Injectable } from '@angular/core';
import { CardsApiService } from './cards-api.service';
import { isNullOrUndefined } from 'util';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards: any;

  constructor(private cardsApiService: CardsApiService) { 
    this.get_cards();
  }

  ngOnInit() {

  }

  async get_cards () {
    try {
      let gcards= this.cardsApiService.getCards("card");
      this.cards = (isNullOrUndefined(await gcards)) ? [] : await gcards;
    } catch (err) {
      console.log(err);
    }
  }
  
  get_card_by_id (id: number) {
    if (typeof this.cards == 'undefined') 
      console.log('ой');
    else
      return this.cards.find(card => card.id === id);
  }

  async onAddCard (card: Card) {
    card.id = (this.cards.length)
      ? this.cards[this.cards.length - 1].id + 1
      : 1;
    this.cards.push(card);
    try {
      await this.cardsApiService.postCards({
        name: card.name, vendorcode: card.vendorcode, price: card.price, capacity: card.capacity});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onEditCard(ed_card: Card) {
    this.cards.splice (
      this.cards.findIndex(card => {card.id === ed_card.id}), 1, ed_card);
    try {
      await this.cardsApiService.putCards(ed_card.id, {
        name: ed_card.name, vendorcode: ed_card.vendorcode, price: ed_card.price, capacity: ed_card.capacity});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onDeleteCard (del_card_id: number) {
    this.cards.splice(this.cards.indexOf(this.cards.find((element, index, array) => {
      return (element.id === del_card_id)
    })), 1); 
    try {
      await this.cardsApiService.deleteCards(del_card_id);
    }
    catch (e) {
      console.error(e);
    }
  }


}
