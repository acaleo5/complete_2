import { Component, Output, EventEmitter } from '@angular/core';
import {postit} from '../app.component';
@Component({
  selector: 'app-createpostit',
  templateUrl: './createpostit.component.html',
  styleUrls: ['./createpostit.component.css']
})
export class CreatepostitComponent {

  constructor() { }
  @Output() newPostitEvent = new EventEmitter<postit>();
  newPostitnew (newPostitT: string, newPostitC: string, newPostitI: boolean) {
    let nupostit: postit = {postittitle: newPostitT, postitcontent: newPostitC, postimp: newPostitI};
    this.newPostitEvent.emit(nupostit);
  }
}