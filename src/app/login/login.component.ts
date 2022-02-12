import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)])
  }
  )
  loginuser(){
    console.warn(this.login.value);
  }
  get email()
  {
    return this.login.get('email');
  }
  get password()
  {
    return this.login.get('password');
  }


}
