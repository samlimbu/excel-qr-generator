import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TessComponent } from './tess.component';

describe('TessComponent', () => {
  let component: TessComponent;
  let fixture: ComponentFixture<TessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
