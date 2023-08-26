const getCardBackgroundColor = (value: number) => {
    console.log("background color:" + value);
    let cardColorToUse = "";
    if (value >= 0 && value < 25) {
      cardColorToUse =
        "linear-gradient(90deg, rgba(205,127,50,1) 0%, rgba(145,78,11,1) 99%)";
    } else if (value >= 25 && value < 50) {
      cardColorToUse =
        "linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(194,173,173,1) 99%)";
    } else if (value >= 50 && value < 75) {
      cardColorToUse =
        "radial-gradient(circle, rgba(255,200,21,1) 0%, rgba(200,157,18,1) 99%)";
    } else if (value >= 75 && value < 100) {
      cardColorToUse =
        "linear-gradient(90deg, rgba(255,241,20,1) 0%, rgba(217,182,2,1) 99%)";
    } else if (value >= 100 && value<125) {
      cardColorToUse =
        "radial-gradient(circle, rgba(102,99,99,1) 0%, rgba(0,0,0,1) 99%)";
    } else if (value >=125 && value<150){
      cardColorToUse="radial-gradient(circle, rgba(67,67,189,1) 0%, rgba(1,1,43,1) 99%)"
    } else {
      cardColorToUse="radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(101,42,42,1) 99%)"
    }
  
    return cardColorToUse;
  };

  export default getCardBackgroundColor