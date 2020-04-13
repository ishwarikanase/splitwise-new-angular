import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }
}
