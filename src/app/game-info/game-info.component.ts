import { Component,OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges{

  cardAction =[
    {title :'WaterFall',description:'A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops'},
    {title :'You',description:'A river sometimes flows over a large step in the rocks that may have been formed by a fault line'},
    {title :'Me',description:'When warm and cold water meet by a gorge in the ocean, large underwater'},
    {title :'Category',description:'Water descends in a constricted form and then spreads out in a wider pool'},
    {title :'Chicks',description:'First, languages that are thought to have arisen from a common proto-language must'},
    {title :'Heaven',description:'Heaven is often described as a "highest place", the holiest place, a Paradise,'},
    {title :'Mate',description:'This means that the languages must show common changes made '},
    {title :'Hard-Player',description:'The final vowel in a word may be omitted.'},
    {title :'Weather',description:'Voiceless sounds, often between vowels, become voiced.'},
    {title :'Sky',description:'The Majority Principle is applied in identifying the most likely pronunciation'},
    {title :'Shooting-star',description:'Comparative Reconstruction makes use of two rather general principles:'},
    {title :'Planet',description:'Consonants become voiceless at the end of words'},
    {title :'Truth',description:'In the first method, the table disappears, but in the second method, it does not work'}
  ];

  title ='';
  description ='';
  @Input() card: string;

  constructor(){}

  ngOnInit(): void {
   
  }

  ngOnChanges(): void {
    if(this.card){
      console.log('this is card', this.card)
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
