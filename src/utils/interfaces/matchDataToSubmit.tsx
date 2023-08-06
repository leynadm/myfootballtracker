interface MatchDataToSubmit {
    positionsPlayed: {
      GK?:boolean;
      CB?:boolean;
      RB?:boolean;
      LB?:boolean;
      DMF?:boolean;
      CMF?:boolean;
      AMF?:boolean;
      RMF?:boolean;
      LMF?:boolean;
      LWF?:boolean;
      RWF?:boolean;
      SS?:boolean;
      CF?:boolean;
    };
    matchDate: Date;
    matchDuration: number;
    cityName: string;
    stadiumName: string;
    matchType: string;
    homeTeamGoals: number;
    awayTeamGoals: number;
    goalsScored: number;
    assistsProvided: number;
    yellowCardsReceived: number;
    redCardsReceived: number;
    foulsCommited: number;
    foulsObtained: number;
    getOnTheScoresheet: boolean;
    bagABrace: boolean;
    scoreAHattrick: boolean;
    fantasticFour: boolean;
    pokerMaster: boolean;
    historyMaker: boolean;
    letTheShowBegin: boolean;
    hawkeye: boolean;
    cannonball: boolean;
    noExcuses: boolean;
    cornerstonePresence: boolean;
    marksman: boolean;
    coldBloodedBeast: boolean;
    aerialThreat: boolean;
    silkySmooth: boolean;
    luckyCharm: boolean;
    heelOfAGoal: boolean;
    innateTalent: boolean;
    laPulga: boolean;
    oneInAMillion: boolean;
    lastMinuteHero: boolean;
    finalWord: boolean;
    heartRate: number;
    distance: number;
    distanceUnit: string;
    matchPerformance: number;
    aPleasureDoingBusiness: boolean;
    foodOnTheTable: boolean;
    assistsMaestro: boolean;
    industrialProvider: boolean;
    puppetMaster: boolean;
    omniscient: boolean;
    youShallNotPass: boolean;
    tacklingTitan: boolean;
    leadFromTheBack: boolean;
    theSaviour: boolean;
    counterAttackingCatalyst: boolean;
    livingInAFortress: boolean;
    theOnlyHero: boolean;
    instantReflexes: boolean;
    GK_p?:boolean;
    CB_p?:boolean;
    RB_p?:boolean;
    LB_p?:boolean;
    DMF_p?:boolean;
    CMF_p?:boolean;
    AMF_p?:boolean;
    RMF_p?:boolean;
    LMF_p?:boolean;
    LWF_p?:boolean;
    RWF_p?:boolean;
    SS_p?:boolean;
    CF_p?:boolean;
  }

  export default MatchDataToSubmit