import { Component, OnInit, Input } from '@angular/core';
import { GroupListService } from '../group-list.service';
import { member } from '../member.model';



@Component({
  selector: '[app-view-member-list]',
  template: `
    <td>{{groupMember.username}}</td>
    <td>{{groupMember.email}}</td>
    <td>{{groupMember.phone}}</td>
    <td>
      <button type="button"  class="btn btn-primary" (click)="delete(index)">Delete</button>
    </td>
  `,
  styles: []
})
export class ViewMemberListComponent implements OnInit {

  @Input() groupMember: member;
  @Input() index: number;


  constructor(private glService: GroupListService) { }

  ngOnInit() {
  }

  delete(index:number){
    this.glService.deleteMember(index);
  }



}
