import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorViewComponent } from './processor-view.component';

describe('ProcessorViewComponent', () => {
  let component: ProcessorViewComponent;
  let fixture: ComponentFixture<ProcessorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
