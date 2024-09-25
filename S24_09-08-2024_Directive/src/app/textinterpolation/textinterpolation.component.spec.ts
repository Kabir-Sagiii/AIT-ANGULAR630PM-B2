import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextinterpolationComponent } from './textinterpolation.component';

describe('TextinterpolationComponent', () => {
  let component: TextinterpolationComponent;
  let fixture: ComponentFixture<TextinterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextinterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
