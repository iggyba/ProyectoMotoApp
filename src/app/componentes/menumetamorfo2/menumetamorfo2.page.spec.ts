import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menumetamorfo2Page } from './menumetamorfo2.page';

describe('Menumetamorfo2Page', () => {
  let component: Menumetamorfo2Page;
  let fixture: ComponentFixture<Menumetamorfo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menumetamorfo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menumetamorfo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
