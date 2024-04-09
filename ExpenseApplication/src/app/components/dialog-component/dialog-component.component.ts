import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrl: './dialog-component.component.css'
})
export class DialogComponentComponent implements OnInit {
  fromPage!: string;
  fromDialog!: string;
  constructor(public dialogRef: MatDialogRef<DialogComponentComponent>) {}
  ngOnInit(): void {
    this.fromDialog = 'from dialog component';
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}
