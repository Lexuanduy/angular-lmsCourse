import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturereditorComponent } from './lecturereditor.component';

describe('LecturereditorComponent', () => {
  let component: LecturereditorComponent;
  let fixture: ComponentFixture<LecturereditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturereditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturereditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
