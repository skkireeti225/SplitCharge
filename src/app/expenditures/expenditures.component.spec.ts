/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExpendituresComponent } from './expenditures.component';

describe('ExpendituresComponent', () => {
  let component: ExpendituresComponent;
  let fixture: ComponentFixture<ExpendituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
