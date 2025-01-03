import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDataComponent } from './admin-dashboard-data.component';

describe('AdminDashboardDataComponent', () => {
  let component: AdminDashboardDataComponent;
  let fixture: ComponentFixture<AdminDashboardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
