import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groupForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      groupName: [''],
      members: this.fb.array([this.fb.group({ email: '' })])
    });
  }

  get members() {
    return this.groupForm.get('members') as FormArray;
  }

  onSubmit() {
    this.router.navigate(['../dashboard'], { relativeTo: this.route });
    console.log(this.groupForm.value);
  }

}
