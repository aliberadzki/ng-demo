import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  Arr = Array;
  private starCount:number = 5;
  active:string = "amber-text";

  @Input() points:number = 0;
  @Input() outOf:number = this.starCount;
  public activeStars:number = 0;
  public notActiveStars:number = this.starCount-this.activeStars;
  constructor() { }

  ngOnInit() {
    this.activeStars = Math.round(this.points/this.outOf * this.starCount);
    this.notActiveStars = this.starCount - this.activeStars;
  }

}
