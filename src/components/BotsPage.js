import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [selectedBots, setSelectedBots] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8002/bots")
  //     .then((response) => response.json())
  //     .then((data) => setSelectedBots(data))
  //     .catch((error) => console.error("Error fetching bots:", error));
  // }, [selectedBots]);
  function handleAddToArmy(bot) {
    setSelectedBots([...selectedBots, bot]);
  }
  function handleDischarge(bot) {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );

    fetch(` http://localhost:8002/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => selectedBots(bot))
      .catch((err) => {
        console.log("Error", err);
      });
  }

  function handleReleaseFromArmy(bot) {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );
    fetch(` http://localhost:8002/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => selectedBots(bot))
      .catch((err) => {
        console.log("Error", err);
      });
  }
  return (
    <div>
      <YourBotArmy
        selectedBots={selectedBots}
        onReleaseFromArmy={(bot) => handleReleaseFromArmy(bot)}
      />
      <BotCollection
        selectedBots={selectedBots}
        onAddToArmy={(bot) => handleAddToArmy(bot)}
        onDischarge={(bot) => handleDischarge(bot)}
      />
    </div>
  );
}

export default BotsPage;
