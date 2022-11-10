import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures = ['actress-2.png', 'actress.png', 'afro.png', 'alien.png', 'angel.png', 'angry.png', 'boy.png', 'cartoon.png', 'chimp.png', 'emotion.png', 'expensive-2.png', 'expensive.png', 'fawkes.png', 'ilja.png', 'leprechaun.png', 'pig.png', 'sad.png', 'stiker.png', 'woman.png'];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }

  ngOnInit(): void {
  }

}
