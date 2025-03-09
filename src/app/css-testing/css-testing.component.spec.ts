import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTestingComponent } from './css-testing.component';

describe('CssTestingComponent', () => {
  let component: CssTestingComponent;
  let fixture: ComponentFixture<CssTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
