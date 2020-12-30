import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'misscoin-app',
  templateUrl: './misscoin-app.component.html',
  styleUrls: ['./misscoin-app.component.scss']
})
export class MisscoinAppComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {
    // this.ContactService.query()
  }

}
