import { Component } from '@angular/core';
import {Validations} from "../../utils/validations";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  validations = new Validations();
  hide = true;

  public registerForm: any = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private userService: UsersService) { }


  createAccount() {
    if (this.registerForm.valid) {
      this.userService.create(this.registerForm.value).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}
