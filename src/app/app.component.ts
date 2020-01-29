import {Component, OnDestroy, OnInit} from '@angular/core';
import {MotherboardsService} from "./shared/services/motherboards.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Krasnova1818';
  motherboards: any;
  
  constructor(private motherboardsService: MotherboardsService) { 
  }

  async ngOnInit() { 
    this.motherboards = this.motherboardsService.motherboards;
  }

  ngOnDestroy(): void {
  }

}
