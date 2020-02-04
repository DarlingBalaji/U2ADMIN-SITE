import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintancesComponent } from './under-maintances.component';

describe('UnderMaintancesComponent', () => {
  let component: UnderMaintancesComponent;
  let fixture: ComponentFixture<UnderMaintancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderMaintancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderMaintancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
