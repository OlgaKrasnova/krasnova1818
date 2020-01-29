import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorAddComponent } from './processor-add.component';

describe('ProcessorAddComponent', () => {
  let component: ProcessorAddComponent;
  let fixture: ComponentFixture<ProcessorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
