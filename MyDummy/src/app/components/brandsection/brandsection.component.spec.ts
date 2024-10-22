import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsectionComponent } from './brandsection.component';

describe('BrandsectionComponent', () => {
  let component: BrandsectionComponent;
  let fixture: ComponentFixture<BrandsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
