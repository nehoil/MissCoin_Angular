import { Contact } from './../../models/contact.model';
import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }
  @Input() contactId: string;
  @Input() showtTitle: string;
  @Input() moves: any;

  convertDate(date) {
    const newDate = new Date(date);
    const option = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return newDate.toLocaleDateString('en-US', option);
  }
  get userMoves() {
    if (this.contactId) {
      return this.moves.filter(
        (move) => move.toId === this.contactId
      );
    } else {
      return this.moves;
    }
  }

  ngOnInit(): void {
    
  }

}
