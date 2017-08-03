import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {EventsService} from "./events.service";
import {Observable} from "rxjs/Observable";
import {Event} from './event';
import 'rxjs/Rx';

@Injectable()
export class EventListResolverService implements Resolve<any> {
  constructor(private eventsService: EventsService) { }

  resolve() : Observable<Event[]> {
    return this.eventsService
      .getEvents()
      .map(events => events);
  }

}
