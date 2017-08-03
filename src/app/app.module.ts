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
import { RatingComponent } from './rating/rating.component';
import { DatePipe } from './date.pipe';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventComponent,
    NotfoundComponent,
    RatingComponent,
    DatePipe,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
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
