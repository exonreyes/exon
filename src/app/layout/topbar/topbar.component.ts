import { Component, OnInit } from '@angular/core';
import {ToggleService} from "@shared/services/toggle.service";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  bars = faBars;
  user = faUser;
  arrowRightFromBracket = faArrowRightFromBracket;
  constructor(private toggleSidebar: ToggleService) {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.toggleSidebar.toggle();
  }
  isToggled() {
    return this.toggleSidebar.isOpen;
  }
}
