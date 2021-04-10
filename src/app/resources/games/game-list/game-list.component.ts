import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/common/interfaces/game';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games: Game[] = []
  @Output() eventClicked = new EventEmitter<Game>();

  colors = [{ status: "MMORPG", color: "orange" }, { status: "MMO", color: "orange" }, 
            { status: "Shooter", color: "red" }, { status: "Social", color: "green" },
            { status: "Card Game", color: "blue" }, { status: "Strategy", color: "purple" },
            { status: "MOBA", color: "pink" }, { status: "Racing", color: "black" },
            { status: "Fighting", color: "yellow"}, { status: "Sports", color: "grey"},
            { status: "Fantasy", color: "brown"}, { status: " MMORPG", color: "orange" },
            { status: "Battle Royale", color: "lightblue"}, { status: "Action RPG", color: "crimson"},
            { status: "Card", color: "blue" }, { status: "ARPG", color: "crimson"}]

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.list().subscribe((res: Game[]) => {
      this.games = res
    })
  }

  updateGame(game: Game) {
    this.eventClicked.emit(game);
  }

  getColor(status: string) {
    return this.colors.filter(item => item.status === status)[0].color 
    // could be better written, but you get the idea
}

}
