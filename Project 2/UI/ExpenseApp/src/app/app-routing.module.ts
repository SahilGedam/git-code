import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesSettlementComponent } from './Components/expenses-settlement/expenses-settlement.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { ParticipantsComponent } from './Components/participants/participants.component';

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
