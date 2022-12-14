import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  game: any;

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }


  newGame() {
    // start Game
    let game = new Game();
    this.firestore
    .collection('games')
    .add(game.toJson())
    .then((gameInfo: any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
    
  }
}
function then(arg0: (gameInfo: any) => void) {
  throw new Error('Function not implemented.');
}

