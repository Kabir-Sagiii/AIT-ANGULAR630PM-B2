import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcompComponent } from './textcomp.component';

describe('TextcompComponent', () => {
  let component: TextcompComponent;
  let fixture: ComponentFixture<TextcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
