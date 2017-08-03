import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventsService} from "../events.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: Event;
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    this.event = this.eventsService.getEvent(id);
  }


}
