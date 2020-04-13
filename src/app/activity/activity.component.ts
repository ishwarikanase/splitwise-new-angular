import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  list = [
    { name: "Bhor Pooja", owe: 600, owed: 100,groupName:"TIPS" },
    { name: "Vaibhav Gaikwad", owe: 3, owed: 2,groupName:"Avengers" },
    { name: "Sarla Hume", owe: 1000, owed: 300,groupName:"TIPS"},
    { name: "Tejswini Parker", owe: 390, owed: 600,groupName:"TIPS" },
    { name: "Raj Kanase", owe: 2000, owed: 2100,groupName:"Avengers" }
  ];
  constructor(private router:Router,private route:ActivatedRoute) { }
  show(){
    this.router.navigate(['../expenses'],{relativeTo:this.route});
  }

  ngOnInit() {
  }

}
