import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDisplayListComponent } from './lead-display-list.component';

describe('LeadDisplayListComponent', () => {
  let component: LeadDisplayListComponent;
  let fixture: ComponentFixture<LeadDisplayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadDisplayListComponent]
    });
    fixture = TestBed.createComponent(LeadDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
