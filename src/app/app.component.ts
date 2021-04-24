import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemingService } from 'src/app/common/services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  themingSubscription: Subscription = new Subscription;
  title = 'F2P';

  constructor(
    private themingService: ThemingService,
    private overlayContainer: OverlayContainer,
  ) { }

  @HostBinding('class')
  public cssClass!: string;

  ngOnInit() {
    this.themingSubscription = this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
      this.applyThemeOnOverlays();
    });
  }

  /**
   * Apply the current theme on components with overlay (e.g. Dropdowns, Dialogs)
   */
  private applyThemeOnOverlays() {
    console.log("test3")
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(this.themingService.themes);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.cssClass);
  }

  ngOnDestroy() {
    this.themingSubscription.unsubscribe();
  }
}
