import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidnavComponent } from './sidnav.component';

describe('SidnavComponent', () => {
  let component: SidnavComponent;
  let fixture: ComponentFixture<SidnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidnavComponent]
    });
    fixture = TestBed.createComponent(SidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
