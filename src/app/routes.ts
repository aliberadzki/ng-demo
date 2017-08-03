/**
 * Created by aliberadzki on 04.07.17.
 */
import {EventListComponent} from "./event-list/event-list.component";
import {EventComponent} from "./event/event.component";
import {Routes} from "@angular/router";
import {NotfoundComponent} from "./notfound/notfound.component";
import {EventRouteActivatorGuard} from "./event-route-activator.guard";
import {EventListResolverService} from "./event-list-resolver.service";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponent, resolve: {
    events: EventListResolverService
  }},
  { path: 'events/:id', component: EventComponent, canActivate: [EventRouteActivatorGuard], canDeactivate:['canDeactivateEventPage']},
  { path: '404', component: NotfoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
];
