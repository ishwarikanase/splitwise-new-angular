import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  owe;
  owed: number;
  total: number;
  list = [
    { name: "Bhor Pooja", owe: 600, owed: 100 },
    { name: "Vaibhav Gaikwad", owe: 3, owed: 2 },
    { name: "Sarla Hume", owe: 1000, owed: 300 },
    { name: "Tejswini Parker", owe: 390, owed: 600 },
    { name: "Raj Kanase", owe: 2000, owed: 2100 }
  ];
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.owe = this.list.reduce((value, { owe }) => value + owe, 0);
    this.owed = this.list.reduce((value, { owed }) => value + owed, 0);
    this.total = this.owed - this.owe;
  }
  
  show(){
    this.router.navigate(['expenses'],{relativeTo:this.route});
  }
}
