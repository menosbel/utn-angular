import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario="formulario";
  input="input";
  label="label";
  box="box"

  myForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.myForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  login(){
    console.log(this.myForm.value)
  };

  ngOnInit(): void {
  }

}
