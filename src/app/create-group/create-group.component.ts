import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


import { member } from './member.model';
import { GroupListService } from './group-list.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  constructor(private glService: GroupListService){}

  @ViewChild('f') signUpForm:NgForm;
  @ViewChild('gf') groupName:NgForm;
  // member: member;
  groupMembersList : member[] = [];
  private subscription: Subscription;
  private addMember = false;

  ngOnInit() {
    // console.log(this.glService.getGroupMembersList());
    // console.log("hi");
    this.groupMembersList = this.glService.getGroupMembersList();
    this.subscription = this.glService.groupMembersListChanged
      .subscribe(
        (groupMembersList : member[] ) => {
          this.groupMembersList = groupMembersList;
        }
      );
  }
  // onSubmit(form: NgForm){
  //   console.log(form.form.value)
  // }

  //if you use @ViewChild to accees the form then no need of passing any parameter.
  onSubmit(){
    console.log(this.signUpForm.form.value);
    this.glService.addMember(this.signUpForm.form.value);
  }

  createForm(){
      console.log(this.groupName.form.value);
  }

  addMembers(){
    this.addMember = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
