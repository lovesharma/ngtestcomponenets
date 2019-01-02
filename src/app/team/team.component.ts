import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Teammembrer = [
    new Team(1, 'winsterm', 234234 ),
    new Team(2, 'john', 5234234 )
  ];
}
