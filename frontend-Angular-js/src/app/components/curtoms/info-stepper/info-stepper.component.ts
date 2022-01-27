import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-stepper',
  templateUrl: './info-stepper.component.html',
  styleUrls: ['./info-stepper.component.scss']
})
export class InfoStepperComponent implements OnInit {

  @Input() StepsNumber: number;
  numbers:Array<number>;
  constructor() {
    this.StepsNumber=4
    this.numbers = Array(this.StepsNumber).fill(this.StepsNumber) // [0,1,2,3,4]
   }

  ngOnInit(): void {
    
  }

}
