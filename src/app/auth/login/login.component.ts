import { Component } from '@angular/core';
import {Validations} from "../../utils/validations";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  validations = new Validations();
  hide = true;
  form: any = {};

  public loginForm: any = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private userService: UsersService, private router: Router) { }

  //routerLink="/home"

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
       this.userService.getByEmail(email).subscribe((response: any) => {
        this.form = response;
        console.log(this.form);
        if (this.loginForm.value.password == this.form.password) {
          alert('Login successful');
          this.router.navigate(['/home']);
        } else {
          alert('Wrong password');
        }
      });
    }
  }
}
