import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SporthallenComponent } from './sporthallen.component';

describe('SporthallenComponent', () => {
  let component: SporthallenComponent;
  let fixture: ComponentFixture<SporthallenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SporthallenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SporthallenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
