import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeModeService, ThemeModeType } from './theme-mode.service';
import {InlineSVGModule} from "ng-inline-svg-2";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-theme-mode-switcher',
  templateUrl: './theme-mode-switcher.component.html',
  imports: [
    InlineSVGModule,
    NgClass,
    AsyncPipe,
    NgIf
  ],
  standalone: true
})
export class ThemeModeSwitcherComponent implements OnInit {
  @Input() toggleBtnClass: string = '';
  @Input() toggleBtnIconClass: string = 'toolbar-icon';
  @Input() menuPlacement: string = 'bottom-end';
  @Input() menuTrigger: string = "{default: 'click', lg: 'hover'}";
  mode$: Observable<ThemeModeType>;
  menuMode$: Observable<ThemeModeType>;

  constructor(private modeService: ThemeModeService) {}

  ngOnInit(): void {
    this.mode$ = this.modeService.mode.asObservable();
    this.menuMode$ = this.modeService.menuMode.asObservable();
  }

  switchMode(_mode: ThemeModeType): void {
    this.modeService.switchMode(_mode);
  }
}
