import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card06Component } from './card06.component';

describe('Card06Component', () => {
  let component: Card06Component;
  let fixture: ComponentFixture<Card06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Card06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
