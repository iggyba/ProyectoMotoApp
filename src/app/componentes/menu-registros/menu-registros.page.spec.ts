import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegistrosPage } from './menu-registros.page';

describe('MenuRegistrosPage', () => {
  let component: MenuRegistrosPage;
  let fixture: ComponentFixture<MenuRegistrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRegistrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
