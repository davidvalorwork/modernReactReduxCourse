import React from "react";

const getSeason = (lat,month)=>{
  if(month>2 && month<9){
    return lat>0?'summer':'winter';
  }else{
    return lat>0?'winter':'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat,new Date().getMonth());
  const icon = season === 'winter'?'snowflake':'sun';
  return (
    <div>
      <h1>{season === 'winter'?'Burr, it is chilly':'Lets hit the beach'}</h1>
    </div>
  );
};
export default SeasonDisplay;