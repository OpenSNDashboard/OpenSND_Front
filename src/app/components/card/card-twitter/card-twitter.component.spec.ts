import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTwitterComponent } from './card-twitter.component';

describe('CardTwitterComponent', () => {
  let component: CardTwitterComponent;
  let fixture: ComponentFixture<CardTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
