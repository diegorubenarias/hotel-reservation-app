import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateTypeComponent } from './real-state-type.component';

describe('RealStateTypeComponent', () => {
  let component: RealStateTypeComponent;
  let fixture: ComponentFixture<RealStateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealStateTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealStateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
