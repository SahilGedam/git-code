import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesSettlementComponent } from './expenses-settlement.component';

describe('ExpensesSettlementComponent', () => {
  let component: ExpensesSettlementComponent;
  let fixture: ComponentFixture<ExpensesSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesSettlementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensesSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
