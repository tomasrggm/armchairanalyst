import { MatchReferenceDto } from './matchReferenceDto';

export interface MatchListDto {
    startIndex: number;
    totalGames: number;
    endIndex: number;
    matches: MatchReferenceDto[];
    images: string[];
}
