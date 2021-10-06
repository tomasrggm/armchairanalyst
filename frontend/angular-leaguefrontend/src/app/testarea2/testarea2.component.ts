import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerDetail } from '../playerDetail';
import { HandlerService } from '../handler.service';
import { MatchListDto } from '../matchInfo/matchListDto';
import { MatchReferenceDto } from '../matchInfo/matchReferenceDto';
import {Location} from '@angular/common';

@Component({
  selector: 'app-testarea2',
  templateUrl: './testarea2.component.html',
  styleUrls: ['./testarea2.component.css']
})
export class Testarea2Component implements OnInit {

  playerId: string = "";


  championImage: string[] = [];

  playerInfo: PlayerDetail;

  playerMatches: MatchListDto;
  constructor(
    private handlerService : HandlerService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    var link = this.router.url.split("/");
    this.playerId = link[link.length-1];
    this.getPlayerInfo();
    this.getPlayerMatches();
  }

  backClicked() {
    this.location.back();
  }


  range(i: number) {
    return new Array(i);
  }

  getPlayerInfo(): void {
    this.handlerService.getPlayerDetail(this.playerId).subscribe(playerInfo => this.playerInfo = playerInfo);
  }

  getPlayerMatches(): void {
    this.handlerService.getMatchesById(this.playerId).subscribe(matches => {
      this.playerMatches = matches;
    });
  }



}
