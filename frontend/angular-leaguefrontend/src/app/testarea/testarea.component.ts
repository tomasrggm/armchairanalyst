import { Component, OnInit } from '@angular/core';

import { HandlerService } from '../handler.service';

import{ Player } from '../player';

@Component({
  selector: 'app-testarea',
  templateUrl: './testarea.component.html',
  styleUrls: ['./testarea.component.css']
})
export class TestareaComponent implements OnInit {

  ladder: Player[] = [];

  constructor(
    private handlerService : HandlerService
  ) { }



  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void{
    this.handlerService.getPlayers().subscribe(ladder => this.ladder = ladder)
  }

  onPress(){
    console.log(this.ladder[0]);
  }
}
