import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisengagedComponent } from './disengaged.component';

describe('DisengagedComponent', () => {
  let component: DisengagedComponent;
  let fixture: ComponentFixture<DisengagedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisengagedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisengagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
