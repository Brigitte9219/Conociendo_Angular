import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetirComponent } from './repetir.component';

describe('RepetirComponent', () => {
  let component: RepetirComponent;
  let fixture: ComponentFixture<RepetirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepetirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepetirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
