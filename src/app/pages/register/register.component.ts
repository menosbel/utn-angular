import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario="formulario";
  input="input";
  label="label";
  box="box";
  titulo="titulo";

  myRegisterForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.myRegisterForm = this.fb.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  register(){
    console.log(this.myRegisterForm.value)
  };

  ngOnInit(): void {
  }

}
