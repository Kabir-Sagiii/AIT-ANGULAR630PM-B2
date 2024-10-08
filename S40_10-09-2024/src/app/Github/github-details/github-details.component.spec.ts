import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubDetailsComponent } from './github-details.component';

describe('GithubDetailsComponent', () => {
  let component: GithubDetailsComponent;
  let fixture: ComponentFixture<GithubDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
