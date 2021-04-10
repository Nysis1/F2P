import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/common/interfaces/game';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {
  
  @Input()
  game!: Game;

  constructor(private gameService: GameService) {}

  ngOnInit() {}
}
