import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Participant } from 'src/app/Interfaces/participants';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  allGroups: any;
  errorMessage: any;
  newParticipant: Participant = {
    participantId: 0,
    username: '',
    groupName: '',
    amount: 0,
  };
  constructor(
    private dataservice: DataServiceService,

    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.getAllGroups();
  }

  addParticipant() {
    if (
      this.newParticipant.username == '' ||
      this.newParticipant.groupName == ''
    ) {
      this.errorMessage = 'input value cannot be empty';
      this.openTempDialog();
    } else {
  
      this.dataservice.addParticipant(this.newParticipant).subscribe((data) => {
     
        this.errorMessage = data;
        this.openTempDialog();
      });
    }
  }
  getAllGroups() {
    this.dataservice.getAllGroups().subscribe((res) => {
      this.allGroups = res;
    
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
