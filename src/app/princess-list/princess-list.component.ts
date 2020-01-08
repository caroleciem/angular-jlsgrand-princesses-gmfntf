import { Component, OnInit } from '@angular/core';
import {PrincessService} from '../princess.service';

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent implements OnInit {

  princessList = this.princessService.princesses;

  constructor(private princessService: PrincessService) { }

  ngOnInit() {
  }

}