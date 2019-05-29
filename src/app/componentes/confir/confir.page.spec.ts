import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirPage } from './confir.page';

describe('ConfirPage', () => {
  let component: ConfirPage;
  let fixture: ComponentFixture<ConfirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
