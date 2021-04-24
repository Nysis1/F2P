import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  
  constructor(public gameService: GameService) {}

  @Input() detailOn: boolean = false;
  @Input() phoneDisplay: boolean = false;

  widthComponent = '50vw'

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {

    if (this.phoneDisplay) {
      console.log("Change detail")
      console.log(changes.detailOn.currentValue)
  
      if (changes.detailOn.currentValue) {
        this.widthComponent = '100vw'
      } else {
        this.widthComponent = '0vw'
      } 
    }
  }
}
