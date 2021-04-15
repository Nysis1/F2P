import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {

  colors = [{ status: "MMORPG", color: "orange" }, { status: "MMO", color: "orange" }, 
            { status: "Shooter", color: "red" }, { status: "Social", color: "green" },
            { status: "Card Game", color: "blue" }, { status: "Strategy", color: "purple" },
            { status: "MOBA", color: "pink" }, { status: "Racing", color: "black" },
            { status: "Fighting", color: "yellow"}, { status: "Sports", color: "grey"},
            { status: "Fantasy", color: "brown"}, { status: " MMORPG", color: "orange" },
            { status: "Battle Royale", color: "lightblue"}, { status: "Action RPG", color: "crimson"},
            { status: "Card", color: "blue" }, { status: "ARPG", color: "crimson"}]

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  getColor(status: string) {
    return this.colors.filter(item => item.status === status)[0].color 
    // could be better written, but you get the idea
  }

}
