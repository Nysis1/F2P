import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'

// const optionRequete = {
//   headers: new HttpHeaders({ 
//     'Access-Control-Allow-Origin':'*',
//     'mon-entete-personnalise':'maValeur'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameList: any;
  savedGameList: any;
  gameDetails: any = {"id":1,"title":"Dauntless","thumbnail":"https:\/\/www.freetogame.com\/g\/1\/thumbnail.jpg","status":"Live","short_description":"A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.","description":"Dauntless is a free-to-play, co-op action RPG developed by independent studio Phoenix Labs \u2014 a studio made of of veteran developers from Bioware, Riot, Capcom, and Blizzard. Set in a science-fantasy world, Dauntless places players in the role of elite warriors called Slayers. These Slayers protect humanity from Behemoths that are consuming the land following a cataclysmic event that turned the landscape into ever-changing, floating islands.\r\n\r\nThe gameplay may remind players of Monster Hunter, or perhaps a cheerier version of Shadow of the Colossus, where the goal is to defeat massive creates in an vast landscape.\r\n\r\nDauntless is playable solo, although it is designed with co-op play in mind. It boasts a variety of unique encounters and rewards players with items that will allow them to upgrade weapons and armor \u2014 enabling them to become even stronger warriors.","game_url":"https:\/\/www.freetogame.com\/open\/dauntless","genre":"MMORPG","platform":"Windows","publisher":"Phoenix Labs","developer":"Phoenix Labs, Iron Galaxy","release_date":"2019-05-21","freetogame_profile_url":"https:\/\/www.freetogame.com\/dauntless","minimum_system_requirements":{"os":"Windows 7 DX11 Support","processor":"CPU: i5 SandyBridge","memory":"4GB","graphics":"GPU: nVidia 660Ti (DX11) or equivalent","storage":"15GB of storage space"},"screenshots":[{"id":5,"image":"https:\/\/www.freetogame.com\/g\/1\/dauntless-1.jpg"},{"id":6,"image":"https:\/\/www.freetogame.com\/g\/1\/dauntless-2.jpg"},{"id":7,"image":"https:\/\/www.freetogame.com\/g\/1\/dauntless-3.jpg"},{"id":9,"image":"https:\/\/www.freetogame.com\/g\/1\/dauntless-4.jpg"}]};

  constructor(private http: HttpClient) {
    this.getGameList();
  }

  getGameList() {
    this.http.get(environment.apiBaseUrl + '/games').subscribe((data) => {
      this.gameList = data;
      this.savedGameList = data;
    });
  }

  getGameDetails(gameId: number) {
    this.http.get(environment.apiBaseUrl + '/game?id=' + gameId).subscribe((data) => {
      this.gameDetails = data;
    });
  }

  searchGame(search : any) {
    this.gameList = this.savedGameList
    this.gameList = this.gameList.filter((game: any) => game.title.toLowerCase().includes(search.toLowerCase()))
  }
}