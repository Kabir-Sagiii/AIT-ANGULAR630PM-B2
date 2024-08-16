import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabtaskComponent } from './tabtask.component';

describe('TabtaskComponent', () => {
  let component: TabtaskComponent;
  let fixture: ComponentFixture<TabtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
