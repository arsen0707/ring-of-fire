import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {
  allImages=['profile1.jpeg','profile2.png','profile3.jpeg',
  'profile4.jpeg','profile5.jpeg','profile6.jpeg','profile7.jpeg']

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>,) { }

  ngOnInit(): void {
  }



  selectImage(){}
}
