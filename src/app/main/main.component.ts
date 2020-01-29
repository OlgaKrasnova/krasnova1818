import {Component, OnInit} from '@angular/core';
import {MotherboardsService} from "../shared/services/motherboards.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private motherboardsService: MotherboardsService) { }

  ngOnInit() {
  }

}
