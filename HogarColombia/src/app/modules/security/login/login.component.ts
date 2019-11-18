import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

  loginEvent(){
    if(this.fgValidation.invalid){
      alert("invalid data");
    }
    else{
      alert("go to login")
    }
  }

  get fg(){
    return this.fgValidation.controls;
  }



}
