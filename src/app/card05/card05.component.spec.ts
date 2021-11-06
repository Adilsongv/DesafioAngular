import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card05Component } from './card05.component';

describe('Card05Component', () => {
  let component: Card05Component;
  let fixture: ComponentFixture<Card05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Card05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
