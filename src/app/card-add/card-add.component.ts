import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { CardsService } from '../shared/services/cards.service';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  @Output() addcard = new EventEmitter<Card>();

  id: number;
  addFormCard: FormGroup;
  disabled_form = false;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private cardsServise: CardsService) {
    this.activatedRouter.params.subscribe(param => {
       this.id = param.id;
    });
  }

  ngOnInit() {
    let editCard = this.cardsServise.get_card_by_id(this.id);
    if (isNullOrUndefined(editCard)) editCard = {name: "", vendorcode: "", price: "", capacity: ""};
    this.addFormCard = new FormGroup( {
      name: new FormControl({value: editCard.name, disabled: this.disabled_form}, [Validators.required]),
      vendorcode: new FormControl({value: editCard.vendorcode, disabled: this.disabled_form}, [Validators.required]),
      price: new FormControl({value: editCard.price, disabled: this.disabled_form}, [Validators.required]),
      capacity: new FormControl({value: editCard.capacity, disabled: this.disabled_form}, [Validators.required]),
    })
  }

  onSave() {
    if (this.id) {
      let card = new Card (this.addFormCard.value.name, this.addFormCard.value.vendorcode, this.addFormCard.value.price, this.addFormCard.value.capacity, this.id);
      this.cardsServise.onEditCard(card);
    }
    else {
      let motherboard = new Card (this.addFormCard.value.name, this.addFormCard.value.vendorcode, this.addFormCard.value.price, this.addFormCard.value.capacity, this.id);
      this.cardsServise.onAddCard(motherboard);
    }
    this.router.navigate([`/card`]); 
  }
}
