import { Component, OnInit } from '@angular/core';
import {EventsService} from "../events.service";
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  constructor(private eventService: EventsService) { }

  ngOnInit() {
     this.eventService
      .getEvents()
      .subscribe(events => this.events = events);
  }

}
