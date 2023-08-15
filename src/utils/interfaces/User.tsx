export interface User {
  firstName: string;
  lastName: string;
  sex: string;
  verified: boolean;
  fullname: string[
  ];
  profileImage: string;
  privateAccount: boolean;
  clubName:string;
  blocked: string[];
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
  country:object;
  id?:string
  stats?:object
}

  export default User