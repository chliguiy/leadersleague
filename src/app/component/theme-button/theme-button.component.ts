import { Component, OnInit } from '@angular/core';
import { StyleManagerService } from 'src/app/services/style-manager.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent implements OnInit {

  isDark = this.styleManager.isDark;
  constructor(private styleManager: StyleManagerService) { }

  ngOnInit(): void {
  }
    toggleDarkTheme() {
      this.styleManager.toggleDarkTheme();
      this.isDark = !this.isDark;
    }
  
}
