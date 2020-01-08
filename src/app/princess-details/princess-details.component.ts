import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrincessService } from '../princess.service';

@Component({
  selector: 'app-princess-details',
  templateUrl: './princess-details.component.html',
  styleUrls: ['./princess-details.component.css']
})
export class PrincessDetailsComponent implements OnInit {
  princess;

  constructor(private route: ActivatedRoute, private princessService: PrincessService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.princess = this.princessService.princesses[params.get('princessId')]
    });
  }

}