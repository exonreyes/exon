import {Component, OnInit} from '@angular/core';
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import {faBell} from "@fortawesome/free-solid-svg-icons/faBell";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {modules_app} from "@data/constants/modules/apps-description";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  urlDashboard: string = 'Dashboard';
  angleDown = faAngleDown;
  bell = faBell;
  envelope = faEnvelope;
  modules = modules_app;

  constructor() {
  }

  ngOnInit(): void {
  }

}
