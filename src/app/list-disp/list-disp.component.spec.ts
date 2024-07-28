import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListDispComponent} from './list-disp.component';

describe('ListDispComponent', () => {
  let component: ListDispComponent;
  let fixture: ComponentFixture<ListDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDispComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
