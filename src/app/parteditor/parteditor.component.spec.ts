import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteditorComponent } from './parteditor.component';

describe('ParteditorComponent', () => {
  let component: ParteditorComponent;
  let fixture: ComponentFixture<ParteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
