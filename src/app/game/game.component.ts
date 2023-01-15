
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard :string ='';
  game : Game;
  gameId : string;
  gameOver = false;

  constructor(private firestore: AngularFirestore,private route:ActivatedRoute,
    public dialog: MatDialog ){ }
  

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params)=>{
      console.log(params['id']);
    this.gameId = params['id'];
    this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .valueChanges()
      .subscribe((game:any)=>{
        console.log('game new',game)
        this.game.currentplayer = game.currentplayer;
        this.game.playedCards = game.playedCards;
        this.game.players = game.players;
        this.game.playerImages = game.playerImages;
        this.game.stack = game.stack;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
        
      });

    });
    
  }

  newGame(){
  this.game = new Game();
    console.log(this.game);
  }

  takeCard(){
    if(this.game.stack.length == 0){
      this.gameOver = true;
    }else if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);
      this.pickCardAnimation = true;
      
      console.log('new card',this.currentCard);
      console.log('new game is on',this.game);
      
      this.game.currentplayer++;
      this.game.currentplayer = this.game.currentplayer % this.game.players.length;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent); 

    dialogRef.afterClosed().subscribe((name:string) => {
      if(name && name.length>0){
      this.game.players.push(name);
      this.game.playerImages.push('profile2.png');
      
      }
    });
  }

  editPlayer(playerId: number){
    console.log('newplayerId',playerId)
    const dialogRef = this.dialog.open(EditPlayerComponent); 


    dialogRef.afterClosed().subscribe((change:string) => {
      if(change){
        if(change == 'DELETE'){
          this.game.players.splice(playerId,1)
        }else{
      console.log('newplayerId',change)
      this.game.playerImages[playerId] = change;
        }
        this.saveGame();
      }
    });
  }


  saveGame(){
    this
    .firestore
    .collection('games')
    .doc(this.gameId)
    .update(this.game.toJson());
  }
}

