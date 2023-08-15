export interface UserProfileSearch {
    firstName: string;
    lastName: string;
    sex: string;
    verified: boolean;
    fullname: string[
    ];
    profileImage: string;
    privateAccount: boolean;
    blocked: string[];
    clubName:string;
    hideProfile: boolean;
    hideSupporters: boolean;
    hideSupporting: boolean;
    preferredFoot: string;
    preferredPosition:string;
    shirtNumber: string;
    skillLevel: string;
    playingExperience: number;
    instagramProfile:string;
    facebookProfile:string;
    youtubeChannel:string;
    height:string;
    onboarding:boolean;
    country:{
      country:string,
      countryCode:string
    }
    id:string
    stats:{
      matchesPlayed:number;
      matchDateArr: object[];
      matchDurationArr: object[];
      matchDuration:number;
      cityNameArr: object[];
      stadiumNameArr:object [];
      matchTypeArr: object[];
      homeTeamGoals:number;
      awayTeamGoals:number;
      goalsScoredArr: object[];
      goalsScored:number;
      assistsProvidedArr:object[];
      assistsProvided:number;
      yellowCardsReceived:number
      redCardsReceived:number
      foulsCommited:number
      foulsObtained:number
      getOnTheScoresheet: number;
      bagABrace: number;
      scoreAHattrick: number;
      fantasticFour: number;
      pokerMaster: number;
      historyMaker: number;
      letTheShowBegin: number;
      hawkeye: number;
      cannonball: number;
      noExcuses: number;
      cornerstonePresence: number;
      marksman: number;
      coldBloodedBeast: number;
      aerialThreat: number;
      silkySmooth: number;
      luckyCharm: number;
      heelOfAGoal: number;
      innateTalent: number;
      laPulga: number;
      oneInAMillion: number;
      lastMinuteHero: number;
      finalWord: number;
      heartRate: number;
      distance: number;
      distanceUnitArr: object[];
      matchPerformance:number
      matchPerformanceArr: object[];
      aPleasureDoingBusiness: number;
      foodOnTheTable: number;
      assistsMaestro: number;
      industrialProvider: number;
      puppetMaster: number;
      omniscient: number;
      youShallNotPass: number;
      tacklingTitan: number;
      leadFromTheBack: number;
      theSaviour: number;
      counterAttackingCatalyst: number;
      livingInAFortress: number;
      theOnlyHero: number;
      instantReflexes: number;
      matchDateArrOnly: string[];
      GK_p: number;
      CB_p: number;
      RB_p: number;
      LB_p: number;
      DMF_p: number;
      CMF_p: number;
      AMF_p: number;
      RMF_p: number;
      LMF_p: number;
      LWF_p: number;
      RWF_p: number;
      SS_p: number;
      CF_p: number;
      wins:number;
      draws:number;
      defeats:number
    }
  }
  
    export default UserProfileSearch