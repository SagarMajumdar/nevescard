import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevesCardComponent } from './neves-card.component';

describe('NevesCardComponent', () => {
  let component: NevesCardComponent;
  let fixture: ComponentFixture<NevesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
