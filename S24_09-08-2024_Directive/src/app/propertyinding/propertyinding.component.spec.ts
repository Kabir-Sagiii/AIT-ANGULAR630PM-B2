import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyindingComponent } from './propertyinding.component';

describe('PropertyindingComponent', () => {
  let component: PropertyindingComponent;
  let fixture: ComponentFixture<PropertyindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
