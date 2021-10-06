import { ParticipantStatsDto } from "./participantStatsDto";
import { ParticipantTimeLineDto } from "./participantTimeLineDto";

export interface ParticipantDto{
  participantId : number;
  championId: number;
  stats: ParticipantStatsDto;
  teamId: number;
  timeline: ParticipantTimeLineDto;
  spell1Id: number;
  spell2Id: number;
  highestAchievedSeasonTier: string;
}
