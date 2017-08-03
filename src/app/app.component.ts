import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appservices-java-team';
  profile: any = {
    login: "adam",
    password: "adam",
    firstName: "Adam",
    lastName: "Liberadzki",
    age: 27
  };

  isLoggedIn() :boolean {
    return this.profile.login.length > 0;
  }
}
