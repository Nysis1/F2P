import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/common/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public gameService: GameService) { }
  
  ngOnInit(): void {
  }

  searchGame(search : any) {
    console.log(search.value)
    this.gameService.searchGame(search.value)
  }

}
