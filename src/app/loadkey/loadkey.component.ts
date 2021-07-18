import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loadkey',
  templateUrl: './loadkey.component.html',
  styleUrls: ['./loadkey.component.css']
})
export class LoadkeyComponent {

  constructor() { }

  @Output() loadKeyEvent = new EventEmitter<string>();
  loadKey(k: string) {
    this.loadKeyEvent.emit(k);
  }

}