import { TeamBansDto } from "./teamBansDto";

export interface TeamStatsDto{
  towerKills: number;
  riftHeraldKills: number;
  firstBlood: boolean;
  inhibitorKills: number;
  bans: TeamBansDto[];
  firstBaron: boolean;
  firstDragon: boolean;
  dragonKills: number;
  baronKills: number;
  firstInhibitor: boolean;
  firstTower: boolean;
  firstRiftHerald: boolean;
  teamId: number;
  win: string;
}
