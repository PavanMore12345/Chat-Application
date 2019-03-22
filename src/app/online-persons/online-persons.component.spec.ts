import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePersonsComponent } from './online-persons.component';

describe('OnlinePersonsComponent', () => {
  let component: OnlinePersonsComponent;
  let fixture: ComponentFixture<OnlinePersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
