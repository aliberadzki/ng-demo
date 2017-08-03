import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() profile:any;

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log(loginForm);
    console.log(loginForm.form.value.userName);
    console.log(loginForm.form.value.password);
  }
}
