import { Timestamp } from "firebase/firestore";

interface RatingDataToSubmit{
    firstName:string;
    lastName:string;
    shirtName:string;
    profileImage:string;
    sprint:number;
    acceleration:number;
    finishing:number;
    longShots:number;
    shotPower:number;
    curl:number;
    weakFootUsage:number;
    shortPassing:number;
    longPassing:number;
    vision:number;
    crossing:number;
    weakFootAccuracy:number;
    ballControl:number;
    composure:number;
    balance:number;
    agility:number;
    strength:number;
    reviewStatus:string;
    stamina:number;
    jumping:number;
    reactions:number;
    headingAccuracy:number;
    marking:number;
    interceptions:number;
    standingTackle:number;
    slidingTackle:number;
    gKReflexes:number;
    gKCatching:number;
    gKClearing:number;
    gKReach:number;
    gKPositioning:number;
    SPD:number;
    SHO:number;
    PAS:number;
    DRI:number;
    DEF:number;
    PHY:number;
    GKP:number;
    reviewComment:string
    id:string;
    country:object[];
    isPlayerGoalkeeper:boolean;
    TDF:number;
    usersThatSentReviews:object[];
    createdAt?:Timestamp
    timestamp:Timestamp
}

export default RatingDataToSubmit