import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerbookComponent } from './custumerbook.component';

describe('CustumerbookComponent', () => {
  let component: CustumerbookComponent;
  let fixture: ComponentFixture<CustumerbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumerbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumerbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
