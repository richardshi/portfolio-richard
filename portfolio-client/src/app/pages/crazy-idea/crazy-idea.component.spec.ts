import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyIdeaComponent } from './crazy-idea.component';

describe('CrazyIdeaComponent', () => {
  let component: CrazyIdeaComponent;
  let fixture: ComponentFixture<CrazyIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrazyIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrazyIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
