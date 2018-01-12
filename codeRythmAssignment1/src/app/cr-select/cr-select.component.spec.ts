import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrSelectComponent } from './cr-select.component';

describe('CrSelectComponent', () => {
  let component: CrSelectComponent;
  let fixture: ComponentFixture<CrSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
