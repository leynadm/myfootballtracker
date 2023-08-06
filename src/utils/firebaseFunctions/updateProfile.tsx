import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


interface ProfileData{
    shirtName:string;
    firstName:string
    lastName:string;
    sex:string;
    verified:boolean;
    profileImage:string;
    hideProfile:boolean;
    hideSupporters:boolean;
    hideSupporting:boolean;
    preferredFoot:string;
    shirtNumber:string;
    playingExperience:number;
    instagramProfile:string;
    facebookProfile:string;
    youtubeChannel:string;
    height:string;

}

async function updateProfile(userDataToUpdate: ProfileData, userId:string) {

    const userDocRef = doc(db, "users", userId);

    await updateDoc(userDocRef,{

        shirtName:userDataToUpdate.shirtName,
        firstName:userDataToUpdate.firstName,
        lastName:userDataToUpdate.lastName,
        sex:userDataToUpdate.sex,
        verified:userDataToUpdate.verified,
        fullname: [
            userDataToUpdate.firstName.toLocaleLowerCase(),
            userDataToUpdate.lastName.toLocaleLowerCase(),
            `${userDataToUpdate.firstName.toLocaleLowerCase()} ${userDataToUpdate.lastName.toLocaleLowerCase()}`,
          ],
        profileImage:userDataToUpdate.profileImage,
        hideProfile:userDataToUpdate.hideProfile,
        hideSupporters:userDataToUpdate.hideSupporters,
        hideSupporting:userDataToUpdate.hideSupporting,
        preferredFoot:userDataToUpdate.preferredFoot,
        shirtNumber:userDataToUpdate.shirtNumber,
        playingExperience:userDataToUpdate.playingExperience,
        instagramProfile:userDataToUpdate.instagramProfile,
        facebookProfile:userDataToUpdate.facebookProfile,
        youtubeChannel:userDataToUpdate.youtubeChannel,
        height:userDataToUpdate.height,

        
    })

}

export default updateProfile