import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      username:[''],
      email:[''],
      password:['']
    });
  }

  onSubmit(){
    console.log(this.signupForm.value);
    this.router.navigate(['login']);
    }

}
