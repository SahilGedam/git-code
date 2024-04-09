import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-expenses-settlement',
  templateUrl: './expenses-settlement.component.html',
  styleUrl: './expenses-settlement.component.css',
})
export class ExpensesSettlementComponent implements OnInit {
  allParticipants: any;
  allGroups: any;
  errorMessage: any;
  showGroup = false;
  displayedColumns: string[] = ['username', 'groupName', 'amount', 'balance'];
  groupsDisplayed: string[] = ['groupName', 'amount', 'avgAmount'];
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.getAllParticipants();
    this.getAllGroups();
  }
  constructor(
    private dataservice: DataserviceService,
    public dialog: MatDialog
  ) {}

  getAllParticipants() {
    this.dataservice.getParticipants().subscribe((res) => {
      this.allParticipants = res;
      this.allParticipants.sort((a, b) => a.groupName.localeCompare(b.groupName))
  
    });
  }
  getAllGroups() {
    this.dataservice.getAllGroups().subscribe((res) => {
      this.allGroups = res;

    });
  }

  showGroupsTable() {
    this.showGroup = !this.showGroup;
  }

  settleAll() {
    this.ngOnInit();
    this.dataservice.resetAll().subscribe((res) => {
 
    });
    this.allParticipants =[];
    this.ngOnInit();
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
