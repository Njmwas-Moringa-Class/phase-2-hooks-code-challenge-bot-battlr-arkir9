import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [selectedBots, setSelectedBots] = useState([]);
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
      .catch((err) => {
        console.log("Error", err);
      });
  }

  function handleReleaseFromArmy(bot) {
    // Remove the bot from the selectedBots array
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );
    fetch(` http://localhost:8002/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(()=>selectedBots(bot))
      .catch((err) => {
        console.log("Error", err);
      });
   
  }
}

export default BotsPage;
