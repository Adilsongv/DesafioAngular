import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card03Component } from './card03.component';

describe('Card03Component', () => {
  let component: Card03Component;
  let fixture: ComponentFixture<Card03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Card03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
