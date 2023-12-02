import React,{useState,useEffect} from "react";
import BotCard from './BotCard';
function BotCollection() {
  // Your code here
  const [bots,setBots] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8002')
    .then(response => response.json())
    .then((data) => setBots(data))
  },[])

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAddToArmy={() => onAddToArmy(bot)}
          onDischarge={() => onDischarge(bot)}
        />
      ))}
      </div>
    </div>
  );
}

export default BotCollection;
