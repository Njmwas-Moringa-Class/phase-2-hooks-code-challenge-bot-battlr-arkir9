import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ onAddToArmy, onDischarge }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const handleSelectBot = (bot) => {
    onAddToArmy(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        <p>Collection of all bots</p>

        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onAddToArmy={() => onAddToArmy(bot)}
            onDischarge={() => onDischarge(bot)}
            onSelect={() => handleSelectBot(bot)} 
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
