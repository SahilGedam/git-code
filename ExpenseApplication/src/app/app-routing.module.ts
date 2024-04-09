import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantsComponent } from './components/participants/participants.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpensesSettlementComponent } from './components/expenses-settlement/expenses-settlement.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'participants',
    pathMatch: 'full',
  },{
    path: 'participants',
    component: ParticipantsComponent
  }
  ,{
    path: 'expense',
    component: ExpensesComponent
  },{
    path: 'expense-settlement',
    component: ExpensesSettlementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
