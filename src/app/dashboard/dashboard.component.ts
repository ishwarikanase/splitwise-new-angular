import { Component, OnInit } from '@angular/core';
// import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router, ActivatedRoute } from '@angular/router';
import { AddExpenseComponent } from '../modals/add-expense/add-expense.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SettleUpComponent } from '../modals/settle-up/settle-up.component';
// import {DynamicDialogRef} from 'primeng/dynamicdialog';
// import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DialogService]
})
export class DashboardComponent implements OnInit {

  title = "Dashboard";
  list = [
    { name: "Bhor Pooja", owe: 600, owed: 100 },
    { name: "Vaibhav Gaikwad", owe: 3, owed: 2 },
    { name: "Sarla Hume", owe: 1000, owed: 300 },
    { name: "Tejswini Parker", owe: 390, owed: 600 },
    { name: "Raj Kanase", owe: 2000, owed: 2100 }
  ];
  Groups = ["FC", "Avengers", "TIPS"];


  constructor(private router: Router, private route: ActivatedRoute, private dialogService: DialogService) { }


  ngOnInit() { }


  dashboard() {
    this.router.navigate(['dashboard']);
    this.title = "Dashboard";
  }

  recent() {
    this.router.navigate(['recent'], { relativeTo: this.route });
    this.title = "Recent";
  }

  all() {
    this.router.navigate(['expenses'], { relativeTo: this.route });
    this.title = "All Expenses";
  }

  createGroups() {
    this.router.navigate(['../groups']);
  }

  inviteFriends() {
    this.router.navigate(['../friends']);
  }

  groups(group) {
    this.router.navigate(['expenses'], { relativeTo: this.route });
    this.title = group;
  }

  friends(friend) {
    this.router.navigate(['expenses'], { relativeTo: this.route });
    this.title = friend.name;
  }

  openAddDialog() {
    const ref = this.dialogService.open(AddExpenseComponent, {
      header: 'Add an expense',
      width: '50%'
    });
  }
  openSettleDialog(){
    const ref = this.dialogService.open(SettleUpComponent, {
      header: 'Setlle Up',
      width: '25%'
    }); 
  }

}
