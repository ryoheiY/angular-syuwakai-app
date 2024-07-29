import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEventModalComponent } from './next-event-modal.component';

describe('NextEventModalComponent', () => {
  let component: NextEventModalComponent;
  let fixture: ComponentFixture<NextEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextEventModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
