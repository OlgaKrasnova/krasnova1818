import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProcessorComponent } from './main-processor.component';

describe('MainProcessorComponent', () => {
  let component: MainProcessorComponent;
  let fixture: ComponentFixture<MainProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
