/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheadListComponent } from './thead-list.component';

describe('TheadListComponent', () => {
  let component: TheadListComponent;
  let fixture: ComponentFixture<TheadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
