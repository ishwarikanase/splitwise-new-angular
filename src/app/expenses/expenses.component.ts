import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  display:boolean;

  list = [
    { name: "Bhor Pooja", owe: 600, owed: 100, groupName: "FC",sub:"tea" },
    { name: "Vaibhav Gaikwad", owe: 3, owed: 2, groupName: "Avengers",sub:"misal" },
    { name: "Sarla Hume", owe: 1000, owed: 300, groupName: "TIPS",sub:"pohe" },
    { name: "Tejswini Parker", owe: 390, owed: 600, groupName: "TIPS",sub:"cream role" },
    { name: "Raj Kanase", owe: 2000, owed: 2100, groupName: "Avengers",sub:"given" }
  ];
  today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
