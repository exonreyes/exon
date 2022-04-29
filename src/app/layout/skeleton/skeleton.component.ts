import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ToggleService} from "@shared/services/toggle.service";

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {
  @ViewChild('sideTogglet') title!: ElementRef;

  private _toggled = false;

  get toggled(): boolean {
    return this._toggled;
  }

  constructor(private toggleSidebarService: ToggleService) {
  }

  ngOnInit(): void {
    this.toggleSidebarService.change.subscribe(isOpen => this._toggled = isOpen);
  }

  eventContent() {
    if (window.innerWidth >= 992) return
    if (this.title.nativeElement.classList.contains('sidenav-toggled')) {
      this.toggleSidebarService.toggle();
    }
  }
}
