import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamecompComponent } from './namecomp.component';

describe('NamecompComponent', () => {
  let component: NamecompComponent;
  let fixture: ComponentFixture<NamecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamecompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
