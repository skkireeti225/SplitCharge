import { Injectable } from '@angular/core';
import { member } from './member.model';
import { Subject } from 'rxjs/Subject';




@Injectable()
export class GroupListService {

  constructor() { }

  // private ingredients: member[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];
  groupMembersListChanged = new Subject<member[]>();
  groupMembersList : member[] = [];

  getGroupMembersList() {
     return this.groupMembersList;
  }

  addMember(member: member) {
    console.log(member);
     this.groupMembersList.push(member);
     this.groupMembersListChanged.next(this.groupMembersList.slice());
    //this.groupMembersList.next(this.groupMembersList.slice());
    console.log(this.groupMembersList);
  }

  deleteMember (index: number) {
    console.log(this.groupMembersList)
    this.groupMembersList.splice(index, 1);
    console.log(this.groupMembersList);
    this.groupMembersListChanged.next(this.groupMembersList.slice());
    console.log(this.groupMembersList);
  }

}
