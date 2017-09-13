/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewMemberListComponent } from './view-member-list.component';

describe('ViewMemberListComponent', () => {
  let component: ViewMemberListComponent;
  let fixture: ComponentFixture<ViewMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
