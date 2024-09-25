import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimmerpComponent } from './trimmerp.component';

describe('TrimmerpComponent', () => {
  let component: TrimmerpComponent;
  let fixture: ComponentFixture<TrimmerpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimmerpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrimmerpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
