import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalbookComponent } from './professionalbook.component';

describe('ProfessionalbookComponent', () => {
  let component: ProfessionalbookComponent;
  let fixture: ComponentFixture<ProfessionalbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
