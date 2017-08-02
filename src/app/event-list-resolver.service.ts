import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {EventsService} from "./events.service";
import 'rxjs/Rx';

@Injectable()
export class EventListResolverService implements Resolve<any> {
  constructor(private eventsService: EventsService) { }

  resolve() {
    return this.eventsService
      .getEvents()
      .map(events => events);
  }

}
