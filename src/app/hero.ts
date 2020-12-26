import { NumberValueAccessor } from "@angular/forms";

export interface Hero {
    id: number;
    name: string;
    powerStats: {
        combat: number,
        speed: number,
        intelligence: number,
        strength: number,
        overallRating?: number,
    };
}