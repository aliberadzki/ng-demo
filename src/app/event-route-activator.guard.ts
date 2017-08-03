import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {EventsService} from "./events.service";

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const eventExists =  !!this.eventsService.getEvent(+next.params['id']);
    if(!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
