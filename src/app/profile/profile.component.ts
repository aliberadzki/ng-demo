import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private profileForm: FormGroup;

  private firstName = new FormControl('Adam');
  private lastName = new FormControl('Liberadzki');
  private age = new FormControl(27);

  constructor(private router: Router) { }
  ngOnInit() {

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues: any) {
    alert("Zapisano zmiany!");
    this.router.navigate(['events']);
  }

  canSave() : boolean {
    return this.age.value > 0
      && this.age.value < 120
      && this.lastName.value.length >0
      && this.firstName.value.length >0;
  }

}
