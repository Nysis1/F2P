import { Component, EventEmitter, OnInit, Output, Input, SimpleChanges } from '@angular/core';
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
    { status: "Card", color: "blue" }, { status: "ARPG", color: "crimson"}];

  @Input() detailOn: boolean = false;
  @Output() setDetailOn = new EventEmitter<boolean>();

  @Input() phoneDisplay: boolean = false;

  widthComponent = '50vw'

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  getGameDetail(gameId: number) {
    this.setDetailOn.emit(true)
    this.gameService.getGameDetails(gameId)
  }

  getColor(status: string) {
    return this.colors.filter(item => item.status === status)[0].color 
    // could be better written, but you get the idea
  }

  searchGame(search : any) {
    this.gameService.searchGame(search.value)
  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.phoneDisplay) {
      console.log("Change detail list")
      console.log(changes.detailOn.currentValue)
  
      if (changes.detailOn.currentValue) {
        this.widthComponent = '0vw'
      } else {
        this.widthComponent = '100vw'
      }
    }
  }

}
