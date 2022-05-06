import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router) {

    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5)]],
    })
   }

  ngOnInit(): void {}

  get Password(){
    return this.form.get("password");
  }

  get Email(){
    return this.form.get("email");
  }


  onEnviar(event:Event){
    event.preventDefault;

    if(this.form.valid){
      this.router.navigate(['menu'])
    } else{
      this.form.markAllAsTouched();
    }
  }
}
