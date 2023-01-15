import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player-mobile',
  templateUrl: './add-player-mobile.component.html',
  styleUrls: ['./add-player-mobile.component.scss']
})
export class AddPlayerMobileComponent implements OnInit {

  @Input() name;
  @Input() newImage;
  @Input() playerActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
