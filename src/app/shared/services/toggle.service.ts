import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  private _isOpen: boolean = false;

  get isOpen(): boolean {
    return this._isOpen;
  }

  toggle() {
    this._isOpen = !this._isOpen;
    this.change.emit(this._isOpen);
  }

  update(state: boolean) {
    this._isOpen = state;
    this.change.emit(this.isOpen);
  }
}
