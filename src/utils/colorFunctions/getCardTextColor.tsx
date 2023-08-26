const getCardTextColor = (value: number) => {
    console.log("background color:" + value);
    let cardTextColorToUse = "";
    if (value >= 0 && value < 25) {
      cardTextColorToUse = "black";
    } else if (value >= 25 && value < 50) {
      cardTextColorToUse = "black";
    } else if (value >= 50 && value < 75) {
      cardTextColorToUse = "black";
    } else if (value >= 75 && value < 100) {
      cardTextColorToUse = "black";
    } else if (value >= 100 && value<125) {
      cardTextColorToUse = "orange";
    } else if (value>=125 && value<150){
      cardTextColorToUse = "silver"
    } else {
      cardTextColorToUse="black"
    }
  
    return cardTextColorToUse;
  };

  export default getCardTextColor