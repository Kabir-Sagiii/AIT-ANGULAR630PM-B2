import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilepComponent } from './mobilep.component';

describe('MobilepComponent', () => {
  let component: MobilepComponent;
  let fixture: ComponentFixture<MobilepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
