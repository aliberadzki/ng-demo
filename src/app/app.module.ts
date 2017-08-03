import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventComponent } from './event/event.component';
import {EventsService} from "./events.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {EventListResolverService} from "./event-list-resolver.service";
import { NotfoundComponent } from './notfound/notfound.component';
import {EventRouteActivatorGuard} from "./event-route-activator.guard";

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    EventListResolverService,
    {provide:'canDeactivateEventPage', useValue: checkState},
    EventRouteActivatorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkState(component: EventComponent) {
  return window.confirm('Czy na pewno chcesz opuścić podstronę '+ component.event.name + '?');
}
