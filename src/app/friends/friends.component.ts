import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  invitationGroup: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.invitationGroup = this.fb.group({
      email: ['']
    });
  }

  onSubmit() {
    this.router.navigate(['../dashboard'], { relativeTo: this.route });
    console.log(this.invitationGroup.value);
  }
}
