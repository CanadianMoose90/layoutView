import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundriesComponent } from './boundries.component';

describe('BoundriesComponent', () => {
  let component: BoundriesComponent;
  let fixture: ComponentFixture<BoundriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
