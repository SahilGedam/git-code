import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../services/dataservice.service';
import { Expense } from '../../interfaces/expense';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  participantList: any;
  // selectedGroupName: any;
  allGroups: any;
  errorMessage: any;
  picker: any;
  newExpense: Expense = {
    username: '',
    groupName: '',
    expenseName: '',
    amount: 0,
    date: new Date(),
  };
  constructor(
    private dataservice: DataserviceService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.getParticipants();
    this.getAllGroups();
  }

  getParticipants() {
    this.dataservice.getParticipants().subscribe((res) => {
      this.participantList = res;
    });
  }
  getAllGroups() {
    this.dataservice.getAllGroups().subscribe((res) => {
      this.allGroups = res;
   
    });
  }
  addExpense() {
    if (this.newExpense.username == '' || this.newExpense.amount == 0) {


      this.errorMessage = 'input value cannot be empty';
      this.openTempDialog();
    } else {


      this.dataservice.addExpense(this.newExpense).subscribe((res) => {
        this.errorMessage = res;
        this.openTempDialog();
       
      });
    }
  }

  getGroupOfSelectedUserName() {
    this.dataservice
      .getParticipantByUsername(this.newExpense.username)
      .subscribe((res) => {
        // this.selectedGroupName = res['groupName'];
        this.newExpense.groupName = res['groupName'];
       
      });
  }

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, {
      height: '200px',
      width: '300px',
      data: this.errorMessage,
    });
  }
}
