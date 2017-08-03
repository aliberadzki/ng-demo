import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../event';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: Event;
  @Input() showDate:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
