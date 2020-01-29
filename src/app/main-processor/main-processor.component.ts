import { Component, OnInit } from '@angular/core';
import { ProcessorsService } from '../shared/services/processors.service';

@Component({
  selector: 'app-main-processor',
  templateUrl: './main-processor.component.html',
  styleUrls: ['./main-processor.component.css']
})
export class MainProcessorComponent implements OnInit {

  constructor(private processorsService: ProcessorsService) { }

  ngOnInit() {
  }

}
