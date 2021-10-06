import { ParticipantDto } from "./participantDto";
import { ParticipantIdentityDto } from "./participantIdentityDto";
import { TeamStatsDto } from "./teamStatsDto";

export interface MatchDto{
  gameId: number;
  participantIdentities: ParticipantIdentityDto[];
  queueId: number;
  gameType: string;
  gameDruation: number;
  teams: TeamStatsDto[];
  platformId: number;
  gameCreation: number;
  seasonId: number;
  gameVersion :string;
  mapId: number;
  gameMode: string;
  participants: ParticipantDto[];
}
