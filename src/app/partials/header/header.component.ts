import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/common/services/theming.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public theming: ThemingService) { }
  
  ngOnInit(): void {
  }

  changeTheme() {
    if (this.theming.theme.getValue() == "light-theme") {
      this.theming.theme.next("dark-theme")
    } else {
      this.theming.theme.next("light-theme")
    }
  }
}
