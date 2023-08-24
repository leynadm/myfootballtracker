
const getTagTextColor = (value: string) => {

    let textColorToUse = "";
    if (value === "GK") {
      textColorToUse = "#FFFF00";
    } else if (value === "CB" || value === "LB" || value==="RB") {
      textColorToUse = "#0096FF"
    } else if (value ==="RMF" || value === "LMF" || value==="CMF" || value === "DMF" || value==="AMF") {
      textColorToUse = "#FFBF00"
    } else if (value === "LWF" || value==="RWF" || value ==="SS" || value==="CF"){
      textColorToUse = "#FF0000"
    } else {
      textColorToUse = "#FFFFFF" 
    }
    
    
    return textColorToUse;
  };

  export default getTagTextColor