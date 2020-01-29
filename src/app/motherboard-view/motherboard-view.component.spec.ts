import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardViewComponent } from './motherboard-view.component';

describe('MotherboardViewComponent', () => {
  let component: MotherboardViewComponent;
  let fixture: ComponentFixture<MotherboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherboardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
