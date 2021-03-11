import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRedditComponent } from './card-reddit.component';

describe('CardRedditComponent', () => {
  let component: CardRedditComponent;
  let fixture: ComponentFixture<CardRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
