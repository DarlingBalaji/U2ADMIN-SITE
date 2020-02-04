import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReceivetComponent } from './send-receivet.component';

describe('SendReceivetComponent', () => {
  let component: SendReceivetComponent;
  let fixture: ComponentFixture<SendReceivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendReceivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReceivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
